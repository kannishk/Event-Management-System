import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function upload() {
  await prisma.data.create({
    data: {
      id: 1,
      event_name: "Kanishk",
      city_name: "Lucknow",
      date: "1996-12-19T16:39:57-08:00",
      latitude: "12345",
      longitude: "1234567",
    },
  });
  console.log("Success");
}

upload();
