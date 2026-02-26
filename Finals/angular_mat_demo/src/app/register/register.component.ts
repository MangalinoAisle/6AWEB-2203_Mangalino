import { DatePipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// Base Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

// Additional Material Components
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatButtonToggleModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  course: string = '';
  angularSkillLevel: number = 5;
  workSetup: string = 'Remote';
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    course: new FormControl('', [Validators.required]),
    angularSkillLevel: new FormControl(5),
    workSetup: new FormControl('Remote', [Validators.required])
  });

  onClickSubmit(data: {
    userName: string;
    email: string;
    password: string;
    gender: string;
    address: string;
    birthDate: Date;
    course: string;
    angularSkillLevel: number;
    workSetup: string;
  }) {
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.address = data.address;
    this.angularSkillLevel = data.angularSkillLevel;
    this.birthDate = data.birthDate;
    this.course = data.course;
    this.workSetup = data.workSetup;

    if (this.formdata.valid) {
      console.log("Form Submitted!", this.formdata.value);
    } else {
      console.log('Form is not valid!');
    }
  }
}
