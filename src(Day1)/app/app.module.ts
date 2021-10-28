import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './productdetails.component';
const Myroute:Routes=[
  {path:'product',component:ProductComponent},
  {path:'Product/:Id',component:ProductDetailsComponent},
 
]

@NgModule({
  declarations: [
    AppComponent,ProductComponent,ProductDetailsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(Myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
