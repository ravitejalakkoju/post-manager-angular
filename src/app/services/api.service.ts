import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/';
  }

  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'users');
  }

  getUser(userId: number): Observable<any> {
    return this.http.get(this.baseUrl + 'users' + '/' + userId);
  }

  getPostsByUser(userId: number): Observable<any> {
    return this.http.get(this.baseUrl + 'users' + '/' + userId + '/' + 'posts');
  }

  createPost(newPost: any): Observable<any> {
    return this.http.post(this.baseUrl + 'users' + '/' + newPost.userId + '/' + 'posts', newPost);
  }

  updatePost(updatedPost: any): Observable<any> {
    return this.http.put(this.baseUrl + 'users' + '/' + updatedPost.userId + '/' + 'posts' + '/' + updatedPost.id, updatedPost);
  }
}
