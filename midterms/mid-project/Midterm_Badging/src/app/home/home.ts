import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data, Post } from '../data'; //
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import map

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css', //
})
export class Home {
  private dataService = inject(Data);

  // We fetch the API data, but we 'map' (transform) the first 5 items
  // to look like real flower shop news instead of Latin.
  posts$: Observable<Post[]> = this.dataService.getPosts().pipe(
    map(posts => {
      const flowerNews = [
        { title: '🌸 Spring Collection Arrival', body: 'Our premium Holland Tulips have just arrived! Available in Pink, Yellow, and Purple bundles. Order now for early delivery.' },
        { title: '💍 Wedding Season Promo', body: 'Getting married soon? Get 15% off on all bridal bouquets and centerpieces booked this month. Visit us for a consultation.' },
        { title: '🌿 New Orchid Collection', body: 'Exotic Phalaenopsis orchids are now in stock. These low-maintenance beauties are perfect for indoor elegance.' },
        { title: '💖 Valentine Pre-Orders', body: 'Don’t wait until the last minute! Secure your red roses today for guaranteed delivery on February 14th.' },
        { title: '✂️ Workshop: Flower Arranging', body: 'Join us this Saturday for a beginner-friendly floral arrangement class. Slots are limited, so sign up early!' }
      ];

      // Overwrite the API data with our real data
      return posts.map((post, index) => {
        if (index < 5) {
          return { ...post, title: flowerNews[index].title, body: flowerNews[index].body };
        }
        return post;
      });
    })
  );
}
