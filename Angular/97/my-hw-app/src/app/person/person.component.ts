import { Component, Input } from '@angular/core';
import { Person } from '../shared/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person!: Person;

  addFriend(friendName: string) {
    this.person.friends = this.person.friends || [];
    this.person.friends.push(friendName);
  }
  removeFriend(index: number) {
    //this.person.friends = this.person.friends.filter(f => f !== friend);
   // const index = this.person.friends.indexOf(friend);
    this.person.friends?.splice(index, 1);
  }
}
