import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.component.html'
})
export class TemplateDemoComponent {
  title = 'Template Driven Form';
  username = '';
  email = '';
  password = '';
  role = '';

  // These must be here to stop the "does not exist" errors
  gender = '';
  status = '';
  comments = '';

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
