import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Post } from './post.model'; // Import the new model

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts'; // New Source

  constructor(private http: HttpClient) { }

  getUsersRemotely(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // New Function for Challenge
  getPostsRemotely(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
}
