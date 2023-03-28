import { Component, Input, Output, EventEmitter } from '@angular/core';

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
}
