import { Component } from '@angular/core';
import { Person } from './Models/Person';
import { PersonService } from './Service/Person.Service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent {
  persobj!:Person;
  personlist:Person[]=[];   //holds multiple data of person type
  personDetails():void
  {
     this.persobj=new Person(12,'geetika');
  }
  personDetailsList():void
  {
     var personserice=new PersonService();
     this.personlist = personserice.getPersonDetails()
  }
}
