import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "山田太朗",
      email: "aliced@prisma.io",
      birthday: "2000-10-22",
      nickname: "hyt",
      password: "password",
      character_id: "01",
    },
  });
  await prisma.character.create({
    data: {
      expression: "Fantastic",
      image: "example.png",
    },
  });
  await prisma.character_score.create({
    data: {
      score: "2.1",
      character_id: "01",
    },
  });
  await prisma.diary.create({
    data: {
      title: "レムを助ける",
      content: "助けることができた。",
      image_path: "example.png",
      createdAt: new Date("2025-01-01"),
      updatedAt: new Date(),
      user_id: "1",
    },
  });
  await prisma.setting.create({
    data: {
      display: true,
      notification: true,
      music: true,
      user_id: "1",
    },
  });
  await prisma.achievement.create({
    data: {
      description: "初めて日記を書く",
      quota: 1,
    },
  });
  await prisma.achievement_image.create({
    data: {
      image_path: "example.com",
      achievement_id: "01",
    },
  });
  await prisma.goal.create({
    data: {
      content: "レムを助ける",
      user_id: "01",
    },
  });
  await prisma.music.create({
    data: {
      music_path: "example.png",
    },
  });
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany();
  const allCharacter = await prisma.character.findMany();
  const allCharacterScore = await prisma.character_score.findMany();
  const allDiary = await prisma.diary.findMany();
  const allSetting = await prisma.setting.findMany();
  const allAchievement = await prisma.achievement.findMany();
  const allAchievement_image = await prisma.achievement_image.findMany();
  const allGoal = await prisma.goal.findMany();
  const allMusic = await prisma.music.findMany();
  console.log(allUsers);
  console.log(allCharacter);
  console.log(allCharacterScore);
  console.log(allDiary);
  console.log(allSetting);
  console.log(allAchievement);
  console.log(allAchievement_image);
  console.log(allGoal);
  console.log(allMusic);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
