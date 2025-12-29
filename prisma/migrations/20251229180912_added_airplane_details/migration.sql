-- CreateTable
CREATE TABLE "Airplane" (
    "id" SERIAL NOT NULL,
    "modelNumber" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Airplane_pkey" PRIMARY KEY ("id")
);
