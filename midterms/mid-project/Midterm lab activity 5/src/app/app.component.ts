import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpclientService } from './httpclient.service';
import { User } from './user.model';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ng-httpclient-demo';
  httpUsers: User[] = [];
  httpPosts: Post[] = [];

  constructor(private httpclientList: HttpclientService) {}

  ngOnInit() {
    // 1. Fetch Users (Activity 5)
    this.httpclientList.getUsersRemotely().subscribe((data: User[]) => {
      this.httpUsers = data;
    });

    // 2. Fetch Posts (Challenge) & TRANSFORM to English
    this.httpclientList.getPostsRemotely().subscribe((data: Post[]) => {
      // First, limit to top 5
      const slicedData = data.slice(0, 5);

      // Then, overwrite the Latin with "Real" English text
      this.httpPosts = slicedData.map(post => {
        switch (post.id) {
          case 1:
            return {
              ...post,
              title: 'Social Media Strategy',
              body: 'Discover how to optimize your social media presence for maximum engagement and growth.'
            };
          case 2:
            return {
              ...post,
              title: 'Content Creation Tips',
              body: 'Learn the art of creating engaging content that resonates with your target audience effectively.'
            };
          case 3:
            return {
              ...post,
              title: 'Digital Marketing 101',
              body: 'Explore new trends in digital marketing and how to apply them to your business strategy.'
            };
          case 4:
            return {
              ...post,
              title: 'SEO Fundamentals',
              body: 'Understanding the fundamentals of Search Engine Optimization to improve your website visibility.'
            };
          case 5:
            return {
              ...post,
              title: 'Brand Identity',
              body: 'Building a strong brand identity is crucial for long-term success and customer loyalty.'
            };
          default:
            return post;
        }
      });
    });
  }
}
