import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';

import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UsersDropdownComponent } from './users-dropdown/users-dropdown.component';

@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent,
    UsersDropdownComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ],
  exports: [
    UsersListComponent
  ]
})

export class UsersModule { }
