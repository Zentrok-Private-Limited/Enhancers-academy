import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-button.html',
  styleUrl: './floating-button.css',
})
export class FloatingButton {
 
  open = false;
  hide = false;
  lastScroll = 0;

  toggle() {
    this.open = !this.open;
  }

  openWhatsApp() {
    window.open('https://wa.me/919599127878', '_blank');
    this.open = false;
  }

  callNow() {
    window.open('tel:9599127878');
    this.open = false;
  }

  // 🔥 SCROLL DETECTION
  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > this.lastScroll && currentScroll > 100) {
      this.hide = true; // scroll down
    } else {
      this.hide = false; // scroll up
    }

    this.lastScroll = currentScroll;
  }
}
