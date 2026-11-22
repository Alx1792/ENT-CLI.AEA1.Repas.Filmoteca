import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cataleg } from './components/cataleg/cataleg';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Cataleg],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Filmoteca');
}
