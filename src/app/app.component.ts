import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInActive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id])
  //   this.activeUsers.splice(id, 1)
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id])
  //   this.inactiveUsers.splice(id, 1)
  // }
}
