import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './Model/product';
import { ProductService } from './Service/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  providers:[ProductService]
})
export class ProductDetailsComponent implements OnInit {
  Id:any;
  product?:Product;
  sub:any;
  constructor(private activatedroute:ActivatedRoute,private _productService:ProductService)  //first constructor will run
  {
    console.log("im constructor");
  }
  ngOnInit():void  //runs after constructor
  {
    this.sub=this.activatedroute.paramMap.subscribe(params => { 
       this.Id = params.get('Id'); 
       this.product=this._productService.getProduct(this.Id); 
   });
  }
}
