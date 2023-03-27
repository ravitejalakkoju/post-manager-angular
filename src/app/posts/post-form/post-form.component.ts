import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../../services/posts.service';
import { IdTrackerService } from '../../services/id-tracker.service';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html'
})

export class PostFormComponent {
  @Input() postDetails: any;
  @Output() updatePosts = new EventEmitter<any>();
  userId: number;

  postForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    userId: new FormControl(''),
    Title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required])
  });

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.updateForm();
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      this.postForm.patchValue({userId: this.userId});
    });
  }

  updateForm() {
    if(this.postDetails) 
      this.postForm.patchValue(this.postDetails);
  }

  clearForm() {
    this.postDetails = null;
    this.postForm.reset();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['postDetails']) {
      this.postDetails = changes['postDetails'].currentValue;
      this.updateForm();
    }
  }

  get title(){
    return this.postForm.get('Title');
  }

  get content(){
    return this.postForm.get('content');
  }

  onSubmit() {
    if(this.postForm.valid) {
      if(this.postDetails) {
        this.postsService.updatePost(this.postForm.value).subscribe(post => {
          this.updatePosts.emit(post);
        }, error => alert(error.message));
      }      
      else {
        this.postsService.createPost(this.postForm.value).subscribe(post => {
          this.updatePosts.emit(post);
        }, error => alert(error.message));
      }
    }
  }
}
