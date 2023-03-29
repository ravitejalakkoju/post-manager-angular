import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserIdGuard } from '../guards/user-id.guard';

import { UsersComponent } from './users.component';

const usersRoutes: Routes = [
  {path: '', component: UsersComponent, outlet: 'users' },
  {path: ':id', redirectTo: ':id/posts' },
  {path: ':id/posts', canActivate: [UserIdGuard], loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule)}
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }