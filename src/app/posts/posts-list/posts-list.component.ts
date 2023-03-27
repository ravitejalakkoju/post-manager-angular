import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html'
})

export class PostsListComponent {
  posts: any[];

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.getPosts(params.get('id'));
    });
  }

  getPosts(userId: any) {
    this.postsService.getPostsByUser(userId)
    .subscribe(posts => this.posts = posts)
  }
}
