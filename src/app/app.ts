import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// NOTE: Assuming component file names end in .component
import { Header } from "./header/header";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";

// CRITICAL FIX: Corrected import path
import { DataBindingDemo } from './data-binding-demo/data-binding-demo';

@Component({
  selector: 'app-root',
  // Ensure ALL components used in app.html, plus RouterOutlet, are listed here.
  imports: [RouterOutlet, Header, Skills, Footer, DataBindingDemo],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true 
})
export class App {
  protected readonly title = signal('my-first-app');
}