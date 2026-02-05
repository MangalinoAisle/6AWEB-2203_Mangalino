import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  // RUBRIC: Variable for the DatePipe to use
  today = new Date();
}
