
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  async ngOnInit(): Promise<void> {
    // 🔹 AOS only in browser
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
      });
    }
  }
  
  showForm = false;
  openForm(): void {
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
  }
}
