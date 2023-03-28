import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

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

  @Output() userSelected = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if(changes['activeId'])
      this.userSelected.emit(changes['activeId'].currentValue);
  }
}
