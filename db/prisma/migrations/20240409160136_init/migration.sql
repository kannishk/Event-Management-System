-- CreateTable
CREATE TABLE "data" (
    "id" SERIAL NOT NULL,
    "event_name" TEXT NOT NULL,
    "city_name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,

    CONSTRAINT "data_pkey" PRIMARY KEY ("id")
);
