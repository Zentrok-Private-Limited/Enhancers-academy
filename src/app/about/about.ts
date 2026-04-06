import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit, AfterViewInit {
  @ViewChildren('counter') counters!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('bg') bg!: ElementRef;
  hasAnimated = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
private el: ElementRef) { }

startCounter() {
  this.counters.forEach((counterEl: ElementRef) => {
    const element = counterEl.nativeElement;
    const target = +element.getAttribute('data-target');
    let count = 0;

    const duration = 1500; // smooth timing
    const step = target / (duration / 16);

    const updateCount = () => {
      count += step;

      if (count < target) {
        element.innerText = Math.floor(count).toString();
        requestAnimationFrame(updateCount);
      } else {
        element.innerText = target.toString();
      }
    };

    updateCount();
  });
}

  @ViewChild('slider') slider!: ElementRef;

  // 🔥 AOS INIT
  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
      });
    }
  }

  // 🔥 AUTO SLIDER
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.slider?.nativeElement;

    if (!el) return;

    setInterval(() => {
      // only mobile
      if (window.innerWidth < 768) {

        el.scrollBy({
          left: el.clientWidth * 0.8,
          behavior: 'smooth'
        });

        // 🔁 reset loop
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          setTimeout(() => {
            el.scrollTo({ left: 0, behavior: 'smooth' });
          }, 500);
        }
      }

    }, 2500); // speed control
  }

  // 🔥 FORM
  showForm = false;

  openForm(): void {
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
  }
}