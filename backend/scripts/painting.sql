CREATE TABLE `db`.`Paintings` (
  `PaintingID` INT NOT NULL AUTO_INCREMENT,
  `OwnerName` VARCHAR(45) NOT NULL,
  `Image` VARCHAR(45) NOT NULL,
  `PurchasePrice` INT NOT NULL,
  `DatePurchased` DATETIME NOT NULL,
  `OriginalOwner` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`PaintingID`));
