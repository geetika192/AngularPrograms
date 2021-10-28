import { Person } from "../Models/Person";

export class PersonService  //repository
{
   getPersonDetails():Person[]
   {
    let personobj:Person[];
    personobj=[
        new Person(1,'geetika'),
        new Person(2,'geetika shukla'),
    ]
    return personobj;
   }
}