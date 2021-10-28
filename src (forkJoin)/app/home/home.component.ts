import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HttpClient ,HttpResponse ,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  lol:any;

  constructor(private httpClient:HttpClient) {
    let character = this.httpClient.get('https://jsonplaceholder.typicode.com/users/10');
    let characterHomeworld = this.httpClient.get('https://jsonplaceholder.typicode.com/users/2');

    forkJoin([character, characterHomeworld]).subscribe(results => {
       // this.loadedCharacter=results;
       this.lol=results;
        console.log(results[0]);
        console.log(results[1]);
    });
   }

 

}
