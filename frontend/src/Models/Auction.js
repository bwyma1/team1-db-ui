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
    constructor(Title, Description, OwnerName, LeadBid, Image, StartPrice, DateListed, EndDate, Paint, Pencil, Modern, Abstract, Realism) {
        this.Title = Title;
        this.Description = Description;
        this.OwnerName = OwnerName;
        this.LeadBid = LeadBid;
        this.Image = Image;
        this.StartPrice = StartPrice;
        this.DateListed = DateListed;
        this.EndDate = EndDate;
        this.Paint = Paint;
        this.Pencil = Pencil;
        this.Modern = Modern;
        this.Abstract = Abstract;
        this.Realism = Realism;
    }
}
