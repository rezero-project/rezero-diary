import { PrismaClient } from "@prisma/client";
import { LanguageServiceClient } from "@google-cloud/language/build/src/v2";
import express from "express";
import { ref } from "vue";

const prisma = new PrismaClient();

const router = express.Router();

const sentimentScore = ref<number | null>(null);
const sentimentMagnitude = ref<number | null>(null);

// 日記の保存処理
router.post("/diaries", async (req, res) => {
  const { title, content, createdAt, image_path, user_id } = req.body;

  try {
    const analyzeSentiment = async () => {
      const client = new LanguageServiceClient();

      const document = {
        content: content,
        type: "PLAIN_TEXT" as const,
      };
      try {
        const [result] = await client.analyzeSentiment({ document });
        if (result.documentSentiment) {
          sentimentScore.value = result.documentSentiment.score ?? 0;
          sentimentMagnitude.value = result.documentSentiment.magnitude ?? 0;
          console.log(result.documentSentiment);
        } else {
          console.error("結果の取得ができませんでした");
        }
      } catch (error) {
        console.error("感情分析エラー:", error);
      }
    };

    await analyzeSentiment();

    const newDiary = await prisma.diary.create({
      data: {
        title,
        content,
        createdAt,
        image_path,
        user_id,
        sentimentScore: sentimentScore.value,
        sentimentMagnitude: sentimentMagnitude.value,
      },
    });
    res.status(200).json({
      message: "日記が保存されました",
      newDiary,
      sentimentAnalysis: {
        score: sentimentScore,
        magnitude: sentimentMagnitude,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "日記の保存に失敗しました" });
  }
});

router.patch("/diary:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, updatedAt, image_path } = req.body;
  try {
    const updatedDiary = await prisma.diary.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
        updatedAt: updatedAt || new Date(),
        image_path,
      },
    });
    res.status(200).json({ message: "日記が更新されました", updatedDiary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "日記の更新に失敗しました" });
  }
});

export default router;
