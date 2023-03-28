import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersDropdownComponent } from './users-dropdown/users-dropdown.component';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent,
    UsersDropdownComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    UsersListComponent
  ]
})

export class UsersModule { }
