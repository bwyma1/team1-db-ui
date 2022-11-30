// export class auction {
//     constructor(id, seller, title, description, price, imageUrl, comments, tags) {
//         this.id = id;
//         this.seller = seller;
//         this.title = title;
//         this.description = description;
//         this.price = price;
//         this.imageUrl = imageUrl;
//         this.comments = comments;
//         this.tags = tags;
//     }
// }
//id, paint id, need descr, leadbid, need title

export class auction {
    constructor(AuctionID, OwnerName, LeadBid, Image, StartPrice, DateListed, EndDate, Title, Description, Pencil, Paint, Modern, Abstract, Realism) {
        this.AuctionID = AuctionID;
        this.Title = Title;
        this.Description = Description;
        this.OwnerName = OwnerName;
        this.LeadBid = LeadBid;
        this.Image = Image;
        this.StartPrice = StartPrice;
        this.DateListed = DateListed;
        this.Pencil = Pencil;
        this.Paint = Paint;
        this.Modern = Modern;
        this.Abstract = Abstract;
        this.Realism = Realism;
        this.EndDate = EndDate;
    }
}
