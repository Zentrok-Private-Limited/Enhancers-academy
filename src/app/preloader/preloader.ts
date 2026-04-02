import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.html',
  styleUrl: './preloader.css',
})
export class Preloader implements OnInit {
pages = Array(18).fill(0);

  showText = false;

  ngOnInit() {
    setTimeout(() => {
      this.showText = true; // 👈 book open ke baad
    }, 6000); // animation duration ke according
  }
}
