import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html'
})

export class PostComponent {
  @Input() postDetails: any;
  @Output() buttonClick = new EventEmitter<number>();

  editPost(id: number) {
    this.buttonClick.emit(id);
  }
}
