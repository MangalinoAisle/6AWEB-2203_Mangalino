import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-data-binding-demo',
  imports: [FormsModule], 
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css',
  standalone: true 
})
export class DataBindingDemo {
  // --- Text Interpolation ---
  message = 'Data Binding Demonstration';
  title = 'My First App!';
  description = 'This is my new Angular Application';

  // --- Property Binding ---
imageUrl = 'assets/logo-angular.jpg';
w = 50;
  h = 50;
  altText = 'Angular Logo';

  // --- Style Binding ---
  textColor = 'blue';

  // --- Class Binding ---
  isHighlighted = true;

  // --- Two-Way Data Binding ---
  yourName = '';

  // --- Event Binding ---
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}