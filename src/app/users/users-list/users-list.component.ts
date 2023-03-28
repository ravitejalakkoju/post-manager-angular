import { Component } from '@angular/core';

import { User } from '../../models/user';

import { UsersService } from '../../services/users.service';
import { IdTrackerService } from '../../services/id-tracker.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html'
})

export class UsersListComponent {
  users: User[];
  activeId: number = 0;
  activeUser: User | undefined;

  constructor(private usersService: UsersService, public idTrackerService: IdTrackerService) {}

  ngOnInit(): void {
    this.getUsers();
    
    this.idTrackerService.currentUser.subscribe(id => {
      this.activeId = id;
      this.activeUser = this.users?.find(user => user.id == this.activeId);
    }, error => error)
  }

  getUsers(){
    this.usersService.getUsers()
    .subscribe(users => this.users = users.map(user => {
      if(this.activeId == user.id) this.activeUser = user;
      return new User(user);
    }));
  }
}
