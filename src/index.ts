import express from "express";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();
const app = express();
// app.use(json-parser())

app.get("/events/find", async (req, res) => {
  const latitude = req.query.latitude;
  const Longitude = req.query.longitude;
    const searchDate = req.query.date;

    const endDate = new Date(searchDate);
    
    
    const data = await prisma.data.findMany({
        where: {
            date:
        }
    })

  const response1 = await axios.get(
  );
  const weather = response1.data;

  const response2 = await axios.get(
  );
  const distance = response2.data;
});

app.listen(3000);

//User's Source Latitude: 40.7128, User's Source Longitude: -74.0060,
// Search Date: 2024-03 - 15
