import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChangeTrackerService {
  currentUser = new Subject<number>();

  updateUser(userId: number) {
    this.currentUser.next(userId);
  }
}