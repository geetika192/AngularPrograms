import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
const MyRoute:Routes=[
  {path:'EmpLogin',component:LoginComponent},
  {path:'EmpSignUp',component:SignUpComponent},
  {path:'EmpProductList',component:ProductListComponent},
  {path:'EmpProductDetail',component:ProductDetailsComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(MyRoute),ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
