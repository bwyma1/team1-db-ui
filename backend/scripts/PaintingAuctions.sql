CREATE TABLE `db`.`PaintingAuctions` (
  `AuctionID` INT NOT NULL AUTO_INCREMENT,
  `PaintingID` INT NOT NULL,
  `OwnerName` VARCHAR(45) NULL,
  `LeadBid` INT NOT NULL,
  `Image` VARCHAR(45) NULL,
  `StartPrice` INT NOT NULL DEFAULT 20,
  `DateListed` DATETIME NOT NULL,
  `Tags` INT NULL DEFAULT 0,
  PRIMARY KEY (`AuctionID`));
