import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/user';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html'
})

export class UsersListComponent {
  users: User[];
  activeId: number;

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
    });
  }

  getUsers(){
    this.usersService.getUsers()
    .subscribe(users => this.users = users.map(user => new User(user)));
  }
}
