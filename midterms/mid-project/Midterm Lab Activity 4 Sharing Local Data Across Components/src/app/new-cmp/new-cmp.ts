import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-cmp',
  standalone: true,
  imports: [CommonModule],
  // FIX: Use the short filenames matching your file structure
  templateUrl: './new-cmp.html',
  styleUrl: './new-cmp.css'
})
export class NewCmpComponent implements OnInit {

  newcomponent = "Entered in new component!";
  todaydate: any;
  componentproperty: any;

  constructor(private myservice: MyserviceService) {}

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.myservice.serviceproperty = "Component Created";
    this.componentproperty = this.myservice.serviceproperty;
  }
}
