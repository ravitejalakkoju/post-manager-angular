import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';

const usersRoutes: Routes = [
  {path: '', component: UsersListComponent, outlet: 'users' },
  {path: ':id/posts', loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule)}
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }