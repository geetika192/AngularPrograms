import { Component } from '@angular/core';
import { Product } from '../Model/product';
import { ProductService } from '../Service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers:[ProductService]
})
export class ProductListComponent{

  temp:Product[]=[];
    constructor(private productService:ProductService) 
    {

    }
  ProductDetails():void
  {
    this.temp=this.productService.getProductDetails();
  }
 
 
}



