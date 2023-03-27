import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../../services/posts.service';
import { IdTrackerService } from '../../services/id-tracker.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html'
})

export class PostsListComponent {
  posts: any[];
  selectedPost: any;

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService, private idTrackerService: IdTrackerService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let userId = Number(params.get('id'));
      this.idTrackerService.updateUser(userId);
      this.getPosts(userId);
    });
  }

  getPosts(userId: number) {
    this.postsService.getPostsByUser(userId)
    .subscribe(posts => this.posts = posts)
  }

  openEditPost(postId: number) {
    this.selectedPost = this.posts.find(post => post.id == postId);
  }
}
