import { Component } from '@angular/core';
import { Order } from './shared/Order';
import { Person } from './shared/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCS HW';
  order: Order = {
    customer: {
      firstName: 'Joe',
      lastName: 'Biden',
      birthdate: new Date(1947, 11, 8),
      address: {
        street: "1600 Pennsylvania Ave NW",
        city: "Washington",
        state: "DC",
        zip: "20500",
      },
      //friends: ['Barack Obama', 'Joe Biden', 'John Kerry', 'Al Gore', 'George Bush']
      friends: [] 
    },
    item: {
      name: "MacBook Pro",
      price: 1299.99,
    }
  };

  setTitle(newTitle: string){
    this.title = newTitle;
  }

  onSubmit(formValues:{title: string}){
    console.log(formValues);
  }
  

}
