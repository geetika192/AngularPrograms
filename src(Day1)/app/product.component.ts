import { Component } from '@angular/core';
import { Product } from './Model/product';
import { ProductService } from './Service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  providers:[ProductService]  //ioc controller or registring the class from memory allocation
})
export class ProductComponent {
    temp:Product[]=[]
    constructor(private productserviceobj:ProductService) 
    {
          
    }
    ProductDetails():void
    {
      this.temp=this.productserviceobj.getProductDetails();
      
    }
}
