<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

interface AchievementItemType {
  id: number;
  description: string;
  quota: number;
}

interface DiariesType {}
// データベースから取得した達成項目を格納する場所
const achievementItems = ref<AchievementItemType[]>([]);

// データベースから取得した日記を格納する場所（今はサンプルデータを入れている）
const diaries = ref<DiariesType[]>([
  {
    id: 1,
    title: "公園での一日",
    content:
      "今日は公園で午後を過ごしました。本を読んだり、散歩したり、リラックスした時間を過ごしました。風が気持ちよくて、静かな一日でした。",
    image_path: "park.jpg",
    createdAt: "2025-01-21T14:23:00Z",
    updatedAt: "2025-01-21T14:23:00Z",
    user_id: "1",
  },
  {
    id: 2,
    title: "買い物の日",
    content:
      "今日は朝からスーパーに行きました。新鮮な野菜とフルーツを買い、お昼ご飯のために準備しました。どれもおいしそうで、早く食べたくなりました。",
    image_path: null,
    createdAt: "2025-01-20T09:15:00Z",
    updatedAt: "2025-01-20T09:15:00Z",
    user_id: "1",
  },
  {
    id: 3,
    title: "初めての寿司作り",
    content:
      "今日は初めて寿司を作ってみました。材料を切ったり、巻いたりするのは少し難しかったけれど、出来上がった時の達成感がありました。味も悪くなくて、大満足でした。",
    image_path: "sushi.jpg",
    createdAt: "2025-01-19T18:40:00Z",
    updatedAt: "2025-01-19T18:40:00Z",
    user_id: "1",
  },
  {
    id: 4,
    title: "朝ランニング",
    content:
      "今朝は早起きして5kmを走ってきました。冬の寒い朝だったけれど、走ると体が温かくなって気持ちよかったです。最近は走り終わった後の爽快感がクセになりつつあります。",
    image_path: null,
    createdAt: "2025-01-18T07:30:00Z",
    updatedAt: "2025-01-18T07:30:00Z",
    user_id: "1",
  },
  {
    id: 5,
    title: "週末の小旅行",
    content:
      "今週末は近くの町に旅行に行ってきました。短い時間でしたが、新しい場所を探索できてとても楽しかったです。温かい地元の料理を堪能でき、リラックスできました。",
    image_path: "weekend.jpg",
    createdAt: "2025-01-17T16:20:00Z",
    updatedAt: "2025-01-17T16:20:00Z",
    user_id: "1",
  },
  {
    id: 6,
    title: "家でゆっくりした日",
    content:
      "今日は一日家で映画を見たり、温かいお茶を飲んだりして過ごしました。外は寒かったけれど、暖かい部屋で過ごす時間がとても幸せでした。",
    image_path: null,
    createdAt: "2025-01-16T13:00:00Z",
    updatedAt: "2025-01-16T13:00:00Z",
    user_id: "1",
  },
]);

// 達成状況を計算
const achievementProgress = computed(() =>
  achievementItems.value.map((achievement) => {
    // diaries の件数をカウント
    const count = diaries.value.length;
    return {
      ...achievement,
      achieved: count >= achievement.quota,
      currentCount: count,
    };
  })
);

const getAchievementItems = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/achievement/get-items"
    );
    if (!response.ok) {
      throw new Error("達成項目の取得に失敗しました。");
    }
    achievementItems.value = await response.json();
    console.log(achievementItems.value);
  } catch (error) {
    console.error("エラーが発生しました。", error);
  }
};

const getDiaries = async () => {
  console.log(diaries);
};

onMounted(() => {
  getAchievementItems();
  getDiaries();
});
</script>

<template>
  <div class="achievements">
    <div
      v-for="achievement in achievementProgress"
      :key="achievement.id"
      class="achievements__item"
    >
      <!-- 条件に応じて画像を切り替え -->
      <img
        v-if="achievement.achieved"
        class="achievements__image"
        src="/images/achieved.png"
        alt="達成の画像"
      />
      <img
        v-else
        class="achievements__image"
        src="/images/not_achieved.png"
        alt="未達成の画像"
      />
      <p class="achievements__description">
        {{ achievement.description }}
      </p>
      <p class="achievements__quota">
        （{{ achievement.currentCount }} /{{ achievement.quota }}）
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Foundation (例: 全体のグリッド構造やスペーシング)
$grid-gap: 2rem;
$image-size: 200px;

// Component
.achievements {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $grid-gap;

  &__item {
    text-align: center;
  }
  &__image {
    width: $image-size;
    height: $image-size;
  }

  &__description {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  &__quota {
    font-size: 0.875rem;
    color: #555;
    margin-top: 0.25rem;
  }
}
</style>
