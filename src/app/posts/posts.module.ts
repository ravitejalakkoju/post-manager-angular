import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';


@NgModule({
  declarations: [
    PostsListComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
