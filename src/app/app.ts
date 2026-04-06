import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Preloader } from './preloader/preloader';
import { FloatingButton } from './shared/floating-button/floating-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, Preloader, FloatingButton  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('enhancers-academy');
  loading = true;

ngOnInit() {
  setTimeout(() => {
    this.loading = false;
  }, 8000); // 3 sec loader
}
}
