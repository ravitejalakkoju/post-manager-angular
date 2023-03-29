import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private usersService: UsersService, public changeTrackerService: ChangeTrackerService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
    
    this.changeTrackerService.currentUser.subscribe(id => {
      this.activeId = id;
      console.log(this.activeId);
    }, error => error)

    this.changeTrackerService.postsUpdated.subscribe(() => {
      this.updateUsers();
    });
  }

  updateUsers() {
    this.getUser(this.activeId);
  }

  getUsers(){
    this.usersService.getUsers()
    .subscribe(users => {
      this.users = users.map(user => new User(user));
      this.activeId = this.activeId || users[0].id;
      this.router.navigate(['users', this.activeId]);
    });
  }

  getUser(userId: number) {
    let index: number = this.users.findIndex(u => u.id == userId);
    this.usersService.getUser(userId)
    .subscribe(user => Object.assign(this.users[index], new User(user)));
  }
}
