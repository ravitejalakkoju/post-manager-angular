import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  @Input() user: User;
}
