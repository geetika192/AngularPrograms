import { Product} from '../Model/product' 
export class ProductService
{
     getProductDetails():Product[]
     {
         var temp=[
             new Product(101,'laptop',55000),
             new Product(102,'PC',75000),
         ];
         return temp;
     }
}