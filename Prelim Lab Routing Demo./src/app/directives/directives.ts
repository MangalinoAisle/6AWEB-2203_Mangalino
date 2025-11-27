import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router'; // 1. Import Router symbols

@Component({
  selector: 'app-directives',
  imports: [FormsModule, RouterLink, RouterLinkActive], // 2. Add them to imports array
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  // Properties
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;
  monthNameStatic: string = 'Mar';
  monthNameDynamic: string = 'Mar';

  // City Array
  cityList: string[] = ["Angeles", "San Fernando", "Mabalacat", "Tarlac", "Bataan"];

  // Student Array
  studentList: any[] = [
    {stud_name: 'D Esquivel', course: 'Web Development', isActive:false},
    {stud_name: 'J Dizon', course: 'Network Administration', isActive:false},
    {stud_name: 'F Alejandro', course: 'Systems Development', isActive:false},
    {stud_name: 'J David', course: 'CyberSecurity', isActive:false},
    {stud_name: 'C Quintana', course: 'Web Development', isActive:true},
  ];

  // Methods
  showNote() {
    this.isNoteVisible = true;
  }

  hideNote() {
    this.isNoteVisible = false;
  }

  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
