import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule, ReactiveFormsModule, FormsModule, MatCardModule, MatIconModule,
    MatSelectModule, MatProgressBarModule, MatTooltipModule, MatButtonToggleModule,
    MatSlideToggleModule, MatToolbarModule
  ],
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent {
  isDarkMode = true;
  submitted = false;

  // Properties to hold submitted data for display
  user_name: string = '';
  user_email: string = '';
  user_github: string = '';
  user_portfolio: string = '';
  user_bio: string = '';
  user_role: string = '';
  user_birthDate!: Date;
  user_workSetup: string = '';

  ageValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const birthYear = new Date(control.value).getFullYear();
      return birthYear > 2006 ? { 'tooYoung': true } : null;
    }
    return null;
  }

  formdata = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/)
    ]),
    github: new FormControl('', [Validators.required]),
    portfolio: new FormControl(''),
    bio: new FormControl('', [Validators.maxLength(200)]),
    role: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required, this.ageValidator]),
    workSetup: new FormControl('Remote', [Validators.required])
  });

  toggleTheme() { this.isDarkMode = !this.isDarkMode; }

  onClickSubmit() {
    this.submitted = true;
    if (this.formdata.valid) {
      // Mapping values safely to display properties
      this.user_name = this.formdata.value.userName ?? '';
      this.user_email = this.formdata.value.email ?? '';
      this.user_github = this.formdata.value.github ?? '';
      this.user_portfolio = this.formdata.value.portfolio ?? '';
      this.user_bio = this.formdata.value.bio ?? '';
      this.user_role = this.formdata.value.role ?? '';

      // FIXED: Use 'any' to bypass the Date overlap restriction
      this.user_birthDate = this.formdata.value.birthDate as any;

      this.user_workSetup = this.formdata.value.workSetup ?? '';

      console.log("Activity Registration Submitted:", this.formdata.value);
    }
  }
}
