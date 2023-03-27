import { Component, Input } from '@angular/core';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html'
})

export class EditPostComponent {
  @Input() postDetails: any;
}
