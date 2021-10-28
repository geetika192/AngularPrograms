import { Component, OnInit } from '@angular/core';
import { book } from '../Models/book';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  Book:book[]=[];
  bookobj!:book;
  Bid!:Number;
  Mess:String='';
  constructor(private userService:UserServiceService)
  {
    this.userService.GetBookDetails().subscribe(book=>
      {   
        this.Book=book;
        console.log(this.Book);
      },
      err=>
      {
        console.log(err);
       
      });  
  }
  SearchBook()
      {
        this.userService.SearchBookByID(this.Bid).subscribe(response =>
          {
            this.bookobj=response;
            if(!this.bookobj)
            {
              this.Mess='NOT FOUND';
          
            }
          },
          err => 
          {
            this.Mess="DATA NOT FOUND";
          });
  }















  // ngOnInit() 
  // {
  //   this.userService.GetBookDetails().subscribe(book=>
  //     {   
  //       this.Book=book;
  //       console.log(this.Book);
  //     },
  //     err=>
  //     {
  //       console.log(err);
       
  //     });  
  // }
}
