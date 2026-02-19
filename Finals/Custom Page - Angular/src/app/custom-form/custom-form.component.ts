import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-form.component.html'
})
export class CustomFormComponent implements OnInit {
  customForm!: FormGroup;
  submitted = false;
  submissionData: any = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customForm = this.fb.group({
      // Validation: 4-12 chars (letters/numbers/_)
      projectName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]{4,12}$')]],
      // Validation: Standard Email
      clientEmail: ['', [Validators.required, Validators.email]],
      serviceType: ['', Validators.required],
      urgency: [false],
      description: ['', [Validators.required, Validators.maxLength(150)]]
    });
  }

  // Getter for easy template access
  get f() { return this.customForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.customForm.valid) {
      // Store form values to reflect them in the results card
      this.submissionData = this.customForm.value;
    }
  }
}
