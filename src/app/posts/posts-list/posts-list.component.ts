import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../../services/posts.service';
import { ChangeTrackerService } from '../../services/change-tracker.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html'
})

export class PostsListComponent {
  userId: number;
  posts: any[];
  selectedPost: any;

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService, private changeTrackerService: ChangeTrackerService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      this.changeTrackerService.updateUser(this.userId);
      this.getPosts(this.userId);
    });
  }

  getPosts(userId: number) {
    this.postsService.getPostsByUser(userId)
    .subscribe(posts => this.posts = posts)
  }

  openEditPost(postId: number) {
    this.selectedPost = this.posts.find(post => post.id == postId);
  }

  updatePostsList(post: any) {
    this.posts = this.posts.filter(p => p.id != post.id);
    this.posts.push(post);
  }
}
