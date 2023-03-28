import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'users-dropdown',
  templateUrl: './users-dropdown.component.html'
})
export class UsersDropdownComponent {
  @Input() users: User[];
  @Input() activeId: number;

  activeUser: User | undefined;
  showUserList: boolean = false;

  get currentUser() {
    if(this.activeUser && this.activeUser.id == this.activeId) {
      return this.activeUser;
    }
    return this.activeUser = this.users?.find(user => user.id == this.activeId);
  }
  
  toggleDropdown() {
    this.showUserList = !this.showUserList;
  }
}
