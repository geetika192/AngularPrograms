import { templateJitUrl } from '@angular/compiler'
import {Product} from '../Model/product'
export class ProductService
{
    getProductDetails():Product[]
    {
        var temp=[
            new Product(101,'laptop',2343),
            new Product(102,'pc',3000)
        ]
        return temp;
    }
    public getProduct(Id:Number) {
        let products:Product[]=this.getProductDetails();
        return products.find(p => p.productId==Id);
    }
}