import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// FIX: Import from './employee' and './products' (without .service)
import { EmployeeService } from './employee';
import { ProductsService } from './products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  // FIX: Point to the correct filenames you have (app.html / app.css)
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// FIX: Rename class to 'App' so main.ts can find it
export class App implements OnInit {
  title = 'ng-services-demo';

  public employees: any;
  public products: any;

  constructor(
    private _employeeService: EmployeeService,
    private _productService: ProductsService
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }
}
