-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `profile_image` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `degree` VARCHAR(191) NULL,
    `specialty` VARCHAR(191) NULL,
    `experience` VARCHAR(191) NULL,
    `fee` VARCHAR(191) NULL,
    `bio` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NULL,

    UNIQUE INDEX `Doctor_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appointments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `doctor_id` INTEGER NULL,
    `patient_id` INTEGER NULL,
    `is_cancel` BOOLEAN NULL,
    `fee` VARCHAR(191) NULL,
    `pay_type` VARCHAR(191) NULL,
    `appointment_date` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `canceled_at` DATETIME(3) NULL,

    UNIQUE INDEX `Appointments_patient_id_key`(`patient_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `Doctor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
