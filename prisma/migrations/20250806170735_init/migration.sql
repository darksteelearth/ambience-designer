-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ambience" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Ambience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sound" (
    "id" SERIAL NOT NULL,
    "soundId" INTEGER NOT NULL,
    "ambienceId" INTEGER NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Sound_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Ambience" ADD CONSTRAINT "Ambience_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sound" ADD CONSTRAINT "Sound_ambienceId_fkey" FOREIGN KEY ("ambienceId") REFERENCES "Ambience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
