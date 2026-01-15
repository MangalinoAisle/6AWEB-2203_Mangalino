import { Component, OnInit } from '@angular/core';
import {
  CommonModule, DatePipe, UpperCasePipe, AsyncPipe,
  CurrencyPipe, SlicePipe, DecimalPipe, TitleCasePipe,
  KeyValuePipe, JsonPipe
} from '@angular/common';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo implements OnInit {
  presentDate = new Date();
  price: number = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  testTitle: string = "mangalino's angular pipes demo";

  objectData = {
    id: 101,
    name: "Mangalino",
    course: "Web Development",
    status: "Midterms"
  };

  time$: Observable<Date> = interval(1000).pipe(
    map(() => new Date())
  );

  getNewDate() {
    this.presentDate = new Date();
  }

  ngOnInit() {}
}
