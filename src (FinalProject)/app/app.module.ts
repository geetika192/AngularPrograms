import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Creating a route table for component.
const MyRoute : Routes = [
  {path : 'Register', component:RegisterComponent},
  {path : 'Login', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent, 
    RegisterComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MyRoute), ReactiveFormsModule       //Has a class called Routes for routing.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
