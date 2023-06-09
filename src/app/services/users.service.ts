import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { USERS } from '../mock-data/mock-users';

import { User } from '../models/user';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private users: User[];

  constructor(private apiService: ApiService) {}

  sortUsers(){
    USERS.sort((a,b) => a.name.localeCompare(b.name));
  }

  getMockUsers(): Observable<User[]>{
    this.sortUsers();
    const users = of(USERS.map(user => user));
    return users;
  }

  setData(users: User[]) {
    this.users = users;
  }

  getData(): User[] {
    return this.users;
  }

  getUsers(): Observable<User[]>{
    return this.apiService.getUsers();
  }

  getUser(userId: number): Observable<User> {
    return this.apiService.getUser(userId);
  }
}
