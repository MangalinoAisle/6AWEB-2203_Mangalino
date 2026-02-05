import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Data, Post } from '../data';
import { TruncatePipe } from '../truncate-pipe';
import { map } from 'rxjs/operators'; // Import map

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  private dataService = inject(Data);

  posts: Post[] = [];
  filteredPosts: Post[] = [];
  searchTerm: string = '';

  // REQ: Loading and Error States
  isLoading: boolean = true;
  errorMessage: string = '';

  // Flower Product Database (to map over API data)
  private products = [
    { title: 'Classic Red Rose Bouquet', body: 'A timeless dozen of our finest long-stemmed red roses, arranged with baby’s breath.' },
    { title: 'Spring Tulip Bundle', body: 'Freshly cut tulips in a mix of vibrant yellow, pink, and purple hues.' },
    { title: 'White Orchid Pot', body: 'Elegant double-stem Phalaenopsis orchid in a ceramic pot. Low maintenance.' },
    { title: 'Sunflower Surprise', body: 'Bright and cheerful sunflowers wrapped in rustic kraft paper and twine.' },
    { title: 'Lavender Dried Wreath', body: 'Aromatic dried lavender woven into a decorative wreath for your home.' },
    { title: 'Peony Perfection', body: 'Soft pink peonies arranged in a glass vase. Limited seasonal availability.' },
    { title: 'Succulent Garden Trio', body: 'Three unique succulents planted in a modern concrete planter box.' },
    { title: 'Bridal Lily Bouquet', body: 'Pure white lilies and greenery, hand-tied with a silk ribbon for weddings.' }
  ];

  constructor() {
    this.dataService.getPosts().pipe(
      // REQ: RxJS Operator (map) - Transforming API data into Flower Products
      map(posts => {
        return posts.map((post, index) => {
          // If we have a matching flower product, use it; otherwise keep API data
          if (index < this.products.length) {
            return { ...post, title: this.products[index].title, body: this.products[index].body };
          }
          return post;
        });
      })
    ).subscribe({
      next: (data) => {
        this.posts = data;
        this.filteredPosts = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load catalog. Please check your connection.';
        this.isLoading = false;
      }
    });
  }

  filter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredPosts = this.posts.filter(p =>
      p.title.toLowerCase().includes(term) ||
      p.body.toLowerCase().includes(term)
    );
  }
}
