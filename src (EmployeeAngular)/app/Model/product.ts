export class Product
{
    productId:Number;
    name:string;
    price:Number;

    constructor(pid:Number,n:string,p:Number) 
    {
        this.productId=pid;
        this.name=n;
        this.price=p;
    }
}