export class auction {
    constructor(id, seller, title, description, price, imageUrl, comments, tags) {
        this.id = id;
        this.seller = seller;
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.comments = comments;
        this.tags = tags;
    }
}