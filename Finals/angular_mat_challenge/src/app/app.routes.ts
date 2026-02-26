import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ChallengeComponent } from './challenge/challenge.component';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'challenge', component: ChallengeComponent }
];
