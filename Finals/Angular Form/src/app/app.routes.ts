import { Routes } from '@angular/router';
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';

export const routes: Routes = [
  { path: 'template-form', component: TemplateDemoComponent },
  { path: 'reactive-form', component: ReactiveDemoComponent },
  { path: '', redirectTo: '/template-form', pathMatch: 'full' }
];
