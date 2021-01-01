/* Create table leetdoc */
CREATE SCHEMA `leetdoc` DEFAULT CHARACTER SET utf8 ;


/* User information */
CREATE TABLE `leetdoc`.`user` (
  `userID` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE INDEX `userID_UNIQUE` (`userID` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE;

/* Tag */
CREATE TABLE `leetdoc`.`tag` (
  `tagID` INT NOT NULL AUTO_INCREMENT,
  `tagName` VARCHAR(45) NOT NULL,
  `userID` INT NULL,
  PRIMARY KEY (`tagID`),
  UNIQUE INDEX `tagID_UNIQUE` (`tagID` ASC) VISIBLE,
  INDEX `userID_idx` (`userID` ASC) VISIBLE,
  CONSTRAINT `userID`
    FOREIGN KEY (`userID`)
    REFERENCES `leetdoc`.`user` (`userID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

/* Question */
CREATE TABLE `leetdoc`.`question` (
  `questionID` INT NOT NULL AUTO_INCREMENT,
  `questionNO` INT NOT NULL,
  `topic` VARCHAR(45) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `mainAns` INT NULL,
  `tagID` INT NULL,
  `user` INT NULL,
  PRIMARY KEY (`questionID`),
  UNIQUE INDEX `questionID_UNIQUE` (`questionID` ASC) VISIBLE,
  INDEX `tagID_idx` (`tagID` ASC) VISIBLE,
  INDEX `userID_idx` (`user` ASC) VISIBLE,
  CONSTRAINT `tagID`
    FOREIGN KEY (`tagID`)
    REFERENCES `leetdoc`.`tag` (`tagID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user`
    FOREIGN KEY (`user`)
    REFERENCES `leetdoc`.`user` (`userID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

/* Answer */
CREATE TABLE `leetdoc`.`answer` (
  `answerID` INT NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(45) NULL,
  `answer` VARCHAR(256) NOT NULL,
  `date` DATETIME NOT NULL,
  `questionID` INT NOT NULL,
  PRIMARY KEY (`answerID`),
  UNIQUE INDEX `answerID_UNIQUE` (`answerID` ASC) VISIBLE,
  INDEX `questionID_idx` (`questionID` ASC) VISIBLE,
  CONSTRAINT `questionID`
    FOREIGN KEY (`questionID`)
    REFERENCES `leetdoc`.`question` (`questionID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
