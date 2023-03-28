import { Component, Input } from '@angular/core';

import { User } from '../../models/user';

import { UsersService } from '../../services/users.service';
import { ChangeTrackerService } from '../../services/change-tracker.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html'
})

export class UsersListComponent {
  @Input() users: User[];
  @Input() activeId: number;

  isListSorted: boolean = false;

  compareByName(user1: User, user2: User) {
    if (user1.name < user2.name) {
      return -1;
    }
    if (user1.name > user2.name) {
      return 1;
    }
    return 0;
  }

  sortUsers() {
    this.users.sort(this.compareByName);
    this.isListSorted = true;
  }
}
