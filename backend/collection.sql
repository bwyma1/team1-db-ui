CREATE TABLE `sys`.`PaintingCollections` (
  `CollectionID` INT NOT NULL AUTO_INCREMENT,
  `OwnerEmail` VARCHAR(45) NOT NULL,
  `PaintingID` INT NULL,
  PRIMARY KEY (`CollectionID`, `OwnerEmail`));
