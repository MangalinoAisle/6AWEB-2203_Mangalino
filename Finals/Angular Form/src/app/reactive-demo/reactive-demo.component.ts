import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.component.html'
})
export class ReactiveDemoComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  formDataResults: any = null; // Property to store entry results

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      // Username: 4-12 characters, only letters, numbers, and underscores
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]{4,12}$')]],

      // Email: standard email validation
      email: ['', [Validators.required, Validators.email]],

      // Password: Minimum 8 chars, at least 1 uppercase, 1 lowercase, 1 number
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')]],

      role: ['Admin', Validators.required],

      // Extra fields from lab instructions
      gender: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['']
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.formDataResults = this.form.value; // Capture entries on submission
      console.log('Reactive Form Data:', this.formDataResults);
    }
  }
}
