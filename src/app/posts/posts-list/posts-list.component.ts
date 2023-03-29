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

  isLoading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService, private changeTrackerService: ChangeTrackerService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      this.changeTrackerService.updateUser(this.userId);
      this.getPosts();
    });
  }

  getPosts() {
    this.isLoading = true;
    this.postsService.getPostsByUser(this.userId)
    .subscribe(posts => {
      this.posts = posts
      this.isLoading = false;
    }, error => alert('Some error has occured'));
  }

  openEditPost(postId: number) {
    this.selectedPost = this.posts.find(post => post.id == postId);
  }

  updatePostsList(post: any) {
    const index = this.posts.findIndex(p => p.id == post.id);
    this.getPosts();
    if(index == -1)   
      this.changeTrackerService.updateUserOnPost();
  }

  clearSelectedPost() {
    this.selectedPost = null;
  }
}
