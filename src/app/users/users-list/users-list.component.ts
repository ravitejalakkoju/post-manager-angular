import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html'
})

export class UsersListComponent {
  users: User[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private usersService: UsersService) {}

  getUsers(){
    this.usersService.getMockUsers()
    .subscribe(users => this.users = users.map(user => new User(user)));
  }
}
