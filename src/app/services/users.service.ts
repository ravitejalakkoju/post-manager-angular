import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { USERS } from '../mock-data/mock-users';

import { User } from '../models/user';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  activeUser: number;

  constructor(private apiService: ApiService) {}

  setActiveUser(id: number) {
    this.activeUser = id;
  }

  getActiveUser() {
    return this.activeUser;
  }

  sortUsers(){
    USERS.sort((a,b) => a.name.localeCompare(b.name));
  }

  getMockUsers(): Observable<User[]>{
    this.sortUsers();
    const users = of(USERS.map(user => user));
    return users;
  }

  getUsers(): Observable<User[]>{
    return this.apiService.getUsers();
  }
}
