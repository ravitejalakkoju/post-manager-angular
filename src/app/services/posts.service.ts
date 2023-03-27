import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private apiService: ApiService) {}

  getPostsByUser(userId: any): Observable<any[]>{
    return this.apiService.getPostsByUser(userId);
  }
}
