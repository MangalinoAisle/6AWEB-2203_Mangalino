import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";
import { Whyhireme } from "./whyhireme/whyhireme";
import { References } from "./references/references";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Skills, Footer, Whyhireme, References],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}
