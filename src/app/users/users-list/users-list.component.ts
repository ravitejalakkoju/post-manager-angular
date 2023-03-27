import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private usersService: UsersService, public idTrackerService: IdTrackerService) {}

  ngOnInit(): void {
    this.getUsers();
    this.idTrackerService.currentUser.subscribe(id => {
      this.activeId = id;
    })
    // setTimeout(() => { 
    //   this.idTrackerService.currentUser.subscribe(id => {
    //     this.activeId = id;
    //   })
    // }, 0);
    
  }

  getUsers(){
    this.usersService.getMockUsers()
    .subscribe(users => this.users = users.map(user => new User(user)));
  }
}
