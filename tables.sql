-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema hospital_data
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hospital_data
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hospital_data` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `hospital_data` ;

-- -----------------------------------------------------
-- Table `hospital_data`.`doctors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital_data`.`doctors` (
  `doctor_ID` INT NOT NULL AUTO_INCREMENT,
  `doctor_Name` VARCHAR(45) NULL DEFAULT NULL,
  `doctor_Type` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`doctor_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `hospital_data`.`nurses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital_data`.`nurses` (
  `nurse_ID` INT NOT NULL AUTO_INCREMENT,
  `nurse_Name` VARCHAR(45) NULL DEFAULT NULL,
  `nurse_Type` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`nurse_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `hospital_data`.`patients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital_data`.`patients` (
  `patient_ID` INT NOT NULL AUTO_INCREMENT,
  `patient_fName` VARCHAR(45) NULL DEFAULT NULL,
  `patient_mName` VARCHAR(45) NULL DEFAULT NULL,
  `patient_lName` VARCHAR(45) NULL DEFAULT NULL,
  `doctor_ID` INT NULL DEFAULT NULL,
  `nurse_ID` INT NULL DEFAULT NULL,
  `deceased` TINYINT(1) NULL DEFAULT '0',
  PRIMARY KEY (`patient_ID`),
  UNIQUE INDEX `patient_ID_UNIQUE` (`patient_ID` ASC) VISIBLE,
  INDEX `doctor_ID_idx` (`doctor_ID` ASC) VISIBLE,
  INDEX `nurse_ID_idx` (`nurse_ID` ASC) VISIBLE,
  CONSTRAINT `doctor_ID`
    FOREIGN KEY (`doctor_ID`)
    REFERENCES `hospital_data`.`doctors` (`doctor_ID`)
    ON UPDATE CASCADE,
  CONSTRAINT `nurse_ID`
    FOREIGN KEY (`nurse_ID`)
    REFERENCES `hospital_data`.`nurses` (`nurse_ID`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `hospital_data`.`billing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital_data`.`billing` (
  `billing_ID` INT NOT NULL AUTO_INCREMENT,
  `services` LONGTEXT NULL DEFAULT NULL,
  `price_Total` DOUBLE(10, 2) NULL DEFAULT '0.00',
  `oustanding_Balance` DOUBLE(10, 2) NULL DEFAULT '0.00',
  `patient_ID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`billing_ID`),
  INDEX `patient_ID_idx` (`patient_ID` ASC) VISIBLE,
  CONSTRAINT `patientID1`
    FOREIGN KEY (`patient_ID`)
    REFERENCES `hospital_data`.`patients` (`patient_ID`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `hospital_data`.`patient_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital_data`.`patient_info` (
  `patient_ID` INT NOT NULL,
  `patient_Allergies` LONGTEXT NULL DEFAULT NULL,
  `patient_HealthConditions` LONGTEXT NULL DEFAULT NULL,
  `patient_FamilyHistory` LONGTEXT NULL DEFAULT NULL,
  `smoker` TINYINT(1) NULL DEFAULT '0',
  `drinker` VARCHAR(45) NULL DEFAULT '',
  `drugs` MEDIUMTEXT NULL DEFAULT NULL,
  `current_medication` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`patient_ID`),
  CONSTRAINT `patientID`
    FOREIGN KEY (`patient_ID`)
    REFERENCES `hospital_data`.`patients` (`patient_ID`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `hospital_data`.`patient_visit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital_data`.`patient_visit` (
  `visit_ID` INT NOT NULL AUTO_INCREMENT,
  `checkin_Date` DATE NULL DEFAULT NULL,
  `checkout_Date` DATE NULL DEFAULT NULL,
  `patient_ID` INT NULL DEFAULT NULL,
  `diagnosis` VARCHAR(100) NULL DEFAULT NULL,
  `procedure` VARCHAR(100) NULL DEFAULT NULL,
  `doctors_Notes` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`visit_ID`),
  INDEX `patient_ID_idx` (`patient_ID` ASC) VISIBLE,
  CONSTRAINT `patient_ID`
    FOREIGN KEY (`patient_ID`)
    REFERENCES `hospital_data`.`patients` (`patient_ID`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `hospital_data`.`room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital_data`.`room` (
  `room_ID` INT NOT NULL AUTO_INCREMENT,
  `room_Type` VARCHAR(45) NULL DEFAULT NULL,
  `patient_ID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`room_ID`),
  INDEX `patientID2_idx` (`patient_ID` ASC) VISIBLE,
  CONSTRAINT `patientID2`
    FOREIGN KEY (`patient_ID`)
    REFERENCES `hospital_data`.`patients` (`patient_ID`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `hospital_data`.`covid`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hospital_data`.`covid` (
  `country` varchar(45) NOT NULL,
  `new_confirmed` int DEFAULT NULL,
  `total_confirmed` int DEFAULT NULL,
  `new_deaths` int DEFAULT NULL,
  `total_deaths` int DEFAULT NULL,
  `new_recovered` int DEFAULT NULL,
  `total_recovered` int DEFAULT NULL,
  PRIMARY KEY (`country`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
