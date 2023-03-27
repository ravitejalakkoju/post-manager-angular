import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private apiService: ApiService) {}

  getPostsByUser(userId: number): Observable<any[]>{
    return this.apiService.getPostsByUser(userId);
  }

  createPost(newPost: any): Observable<any> {
    return this.apiService.createPost(newPost);
  }

  updatePost(updatedPost: any): Observable<any> {
    return this.apiService.updatePost(updatedPost);
  }
}
