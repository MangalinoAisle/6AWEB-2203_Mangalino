import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Interpolation
  studentName = "Mangalino Gianne Aisle";
  score = 95;

  // Property binding
  imageUrl: string = "https://picsum.photos/200";
  isDisabled =true;

  // Attribute binding
  colSpanValue= 3;

  // Class binding
  isPassing = true;

  // Style binding
  boxColor = "purple";
  boxSize = "150px";
}
