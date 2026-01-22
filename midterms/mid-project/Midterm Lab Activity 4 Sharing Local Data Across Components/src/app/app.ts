import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// IMPORT FIX: Using your file names (no .service or .component)
import { EmployeeService } from './employee';
import { ProductsService } from './products';
import { MyserviceService } from './myservice';
import { NewCmpComponent } from './new-cmp/new-cmp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewCmpComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'ng-services-demo';

  public employees: any;
  public products: any;

  // Activity 3 Variables
  public todaydate: any;
  public componentproperty: any;

  constructor(
    private _employeeService: EmployeeService,
    private _productService: ProductsService,
    private _myservice: MyserviceService
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();

    // Activity 3 Logic
    this.todaydate = this._myservice.showTodayDate();
    this.componentproperty = this._myservice.serviceproperty;
  }
}
