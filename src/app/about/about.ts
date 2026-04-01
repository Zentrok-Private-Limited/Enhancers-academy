
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

//   activeIndex: number | null = null;

//   faqs = [
//   {
//     question: 'Where should a student begin?',
//     answer: 'Students can start by understanding their goals and joining the right course that matches their academic needs.'
//   },
//   {
//     question: 'How do we support students?',
//     answer: 'We provide regular classes, doubt-solving sessions, and personal guidance for every student.'
//   },
//   {
//     question: 'Why choose our institute?',
//     answer: 'We focus on concept clarity, disciplined study patterns, and consistent performance improvement.'
//   },
//   {
//     question: 'Is personal attention given?',
//     answer: 'Yes, we ensure every student gets proper attention and support throughout their learning journey.'
//   }
// ];

//   toggleFAQ(index: number) {
//     this.activeIndex = this.activeIndex === index ? null : index;
//   }

}
