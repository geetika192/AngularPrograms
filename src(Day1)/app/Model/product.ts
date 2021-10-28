export class Product {
    productId: Number;
    Name: String;
    price: Number
    constructor(pid: Number, nm: String, pr: Number) {
        this.Name = nm;
        this.productId = pid;
        this.price = pr;
    }
}