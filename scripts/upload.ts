import { PrismaClient } from "@prisma/client";
const fs = require("fs");
const csv = require("csv-parser");

const prisma = new PrismaClient();

async function uploadCSVToDB(csvFilePath: any, modelName: any) {
  const csvData: any = [];

  // Read the CSV file
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on("data", (data: any) => csvData.push(data))
    .on("end", async () => {
      console.log(`Loaded ${csvData.length} records from the CSV file`);

      // Insert the data into the database
      for (const record of csvData) {
        const { event_name, city_name, date, time, latitude, longitude } =
          record;

        try {
          await prisma.data.create({
            data: {
              event_name: event_name,
              city_name: city_name,
              date: date,
              time: time,
              latitude: latitude,
              longitude: longitude,
            },
          });
        } catch (e) {
          console.log("Cant be done");
        }
      }

      console.log("Data upload completed successfully");
    });
}

uploadCSVToDB("data.csv", "data");
