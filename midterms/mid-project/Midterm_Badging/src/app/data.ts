import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class Data {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // REQUIRED: Cache to store API response (Singleton pattern)
  private postsCache$!: Observable<Post[]>;

  getPosts(): Observable<Post[]> {
    if (!this.postsCache$) {
      this.postsCache$ = this.http.get<Post[]>(this.apiUrl).pipe(
        shareReplay(1) // REQUIRED: Caching logic
      );
    }
    return this.postsCache$;
  }
}
