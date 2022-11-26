export class auction {
    constructor(AuctionID, PaintingID, OwnerName, LeadBid, Image, StartPrice, DateListed, Tags, EndDate) {
        this.AuctionID = AuctionID;
        this.PaintingID = PaintingID;
        this.OwnerName = OwnerName;
        this.LeadBid  = LeadBid;
        this.Image = Image;
        this.StartPrice = StartPrice;
        this.DateListed = DateListed;
        this.Tags = Tags;
        this.EndDate = EndDate;
    }
}