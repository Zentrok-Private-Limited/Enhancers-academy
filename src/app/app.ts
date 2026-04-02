import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Preloader } from './preloader/preloader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, Preloader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('enhancers-academy');
  loading = true;

ngOnInit() {
  setTimeout(() => {
    this.loading = false;
  }, 10000); // 3 sec loader
}
}
