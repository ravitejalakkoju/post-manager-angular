import { Component } from '@angular/core';

import { User } from '../models/user';

import { UsersService } from '../services/users.service';
import { ChangeTrackerService } from '../services/change-tracker.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users: User[];
  activeId: number = 0;

  constructor(private usersService: UsersService, public changeTrackerService: ChangeTrackerService) {}

  ngOnInit(): void {
    this.getUsers();
    
    this.changeTrackerService.currentUser.subscribe(id => {
      this.activeId = id;
    }, error => error)
  }

  updateUsers() {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers()
    .subscribe(users => {
      this.users = users.map(user => new User(user));
      this.activeId = this.activeId ?? users[0].id;
    });
  }
}
