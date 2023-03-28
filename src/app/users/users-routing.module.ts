import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const usersRoutes: Routes = [
  {path: '', component: UsersComponent, outlet: 'users' },
  {path: ':id', redirectTo: ':id/posts'},
  {path: ':id/posts', loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule)}
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }