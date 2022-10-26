CREATE TABLE `db`.`Users` (
  `Email` VARCHAR(45) NOT NULL,
  `DisplayName` VARCHAR(45) NOT NULL,
  `BidList` INT NULL DEFAULT -1,
  `SellList` INT NULL DEFAULT -1,
  `PaintingList` INT NULL DEFAULT -1,
  `Bio` VARCHAR(90) NULL DEFAULT 'No Bio Yet!',
  `ProfilePic` VARCHAR(45) NOT NULL,
  `Tags` INT NOT NULL DEFAULT 0,
  `Password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`DisplayName`, `Email`));