import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChangeTrackerService {
  currentUser = new Subject<number>();
  postsUpdated = new Subject<void>();

  updateUser(userId: number) {
    this.currentUser.next(userId);
  }

  updateUserOnPost() {
    this.postsUpdated.next();
  }
}