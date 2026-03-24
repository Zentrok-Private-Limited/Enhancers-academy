import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  // ================= BANNER SLIDER =================
  currentBanner = 0;
 bannerInterval: ReturnType<typeof setInterval> | null = null;

banners = [
  {
    // tag: 'Admissions Open • Enhancers Academy',
    title1: 'Classes XI & XII',
    title2: 'Accountancy',
    title3: 'Economics',
    desc: 'Expert guidance for senior classes with dedicated faculty. Accountancy by CS Nitin Gupta and Maths by Ashutosh Shukla.',
    stat1: 'XI–XII',
    stat1Label: 'Senior Classes',
    stat2: '2',
    stat2Label: 'Expert Faculties',
    stat3: 'CUET',
    stat3Label: 'Preparation',
    featureTitle: 'Courses & Faculty',
    features: [
      { icon: '<i class="fa-solid fa-book-open"></i>', title: 'Accountancy', text: 'Special guidance for Class XI & XII students.' },
      { icon: '<i class="fa-solid fa-arrow-trend-up"></i>', title: 'Economics', text: 'Strong concept building and exam preparation.' },
      { icon: '<i class="fa-solid fa-chalkboard-user"></i>', title: 'CS Nitin Gupta', text: 'Dedicated faculty for Accountancy & Economics.' },
      { icon: '<i class="fa-solid fa-square-root-variable"></i>', title: 'Maths by Ashutosh Shukla', text: 'Focused learning with clear concept support.' }
    ],
    image: '/2.png',
    badgeTopLabel: 'Branch 1',
    badgeTopValue: 'F-10, Prashant Vihar',
    badgeBottomLabel: 'Branch 2',
    badgeBottomValue: 'QU 233-C Pitampura'
  },
  {
    tag: 'Classes I–VIII • IX–X Admissions Open',
    title1: 'All Subject',
    title2: 'Maths Science',
    title3: 'English',
    desc: 'Complete academic support for junior and middle classes. All subjects for Classes I–VIII and Maths, Science, English for Classes IX–X.',
    stat1: 'I–VIII',
    stat1Label: 'All Subjects',
    stat2: 'IX–X',
    stat2Label: 'Core Subjects',
    stat3: '2',
    stat3Label: 'Branches',
    featureTitle: 'What We Offer',
    features: [
      { icon: '<i class="fa-solid fa-book"></i>', title: 'Classes I–VIII', text: 'All subjects covered with proper academic support.' },
      { icon: '<i class="fa-solid fa-calculator"></i>', title: 'Maths', text: 'Concept clarity and regular practice sessions.' },
      { icon: '<i class="fa-solid fa-flask"></i>', title: 'Science', text: 'Strong fundamentals with guided preparation.' },
      { icon: '<i class="fa-solid fa-pen-nib"></i>', title: 'English', text: 'Grammar, writing and comprehension improvement.' }
    ],
    image: '/5.png',
    badgeTopLabel: 'Call Now',
    badgeTopValue: '95991 27878',
    badgeBottomLabel: 'Also Call',
    badgeBottomValue: '98687 26527'
  },
  {
    tag: 'CUET & Entrance Exam Preparation',
    title1: 'Prepare Smart',
    title2: 'Crack CUET',
    title3: 'With Confidence',
    desc: 'Focused preparation for CUET and entrance exams with expert mentoring, regular practice, and strong academic support.',
    stat1: 'CUET',
    stat1Label: 'Target Exam',
    stat2: '2',
    stat2Label: 'Branches',
    stat3: '100%',
    stat3Label: 'Guidance',
    featureTitle: 'Entrance Preparation',
    features: [
      { icon: '<i class="fa-solid fa-bullseye"></i>', title: 'CUET Preparation', text: 'Focused coaching for better exam performance.' },
      { icon: '<i class="fa-solid fa-file-pen"></i>', title: 'Regular Practice', text: 'Test-based approach for stronger preparation.' },
      { icon: '<i class="fa-solid fa-chalkboard-user"></i>', title: 'Expert Guidance', text: 'Mentorship by experienced faculty members.' },
      { icon: '<i class="fa-solid fa-rocket"></i>', title: 'Confidence Building', text: 'Prepare with strategy and exam readiness.' }
    ],
    image: '/6.png',
    badgeTopLabel: 'Main Contact',
    badgeTopValue: '95991 27878',
    badgeBottomLabel: 'Support Contact',
    badgeBottomValue: '98687 26527'
  }
];

nextBanner(): void {
  this.currentBanner = (this.currentBanner + 1) % this.banners.length;
}

prevBanner(): void {
  this.currentBanner =
    (this.currentBanner - 1 + this.banners.length) % this.banners.length;
}

goToBanner(index: number): void {
  this.currentBanner = index;
}

startBannerAutoPlay(): void {
  this.stopBannerAutoPlay();
  this.bannerInterval = setInterval(() => {
    this.nextBanner();
  }, 4000);
}

stopBannerAutoPlay(): void {
  if (this.bannerInterval) {
    clearInterval(this.bannerInterval);
    this.bannerInterval = null;
  }
}
  // ================= TESTIMONIAL SLIDER =================
  testimonialIndex = 0;
  testimonialInterval: ReturnType<typeof setInterval> | null = null;

  testimonials = [
    {
      name: 'Riya Sharma',
      role: 'Class 12 Student',
      text: 'Enhancers Academy helped me score 95% in boards.',
      img: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Amit Verma',
      role: 'Parent',
      text: 'Great teachers and personal attention for every student.',
      img: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Rahul Gupta',
      role: 'CUET Aspirant',
      text: 'Mock tests and guidance helped me crack CUET.',
      img: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
  ];

  nextTestimonial(): void {
    this.testimonialIndex =
      (this.testimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.testimonialIndex =
      (this.testimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number): void {
    this.testimonialIndex = index;
  }

  startTestimonialAuto(): void {
    this.stopTestimonialAuto();
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 4000);
  }

  stopTestimonialAuto(): void {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
      this.testimonialInterval = null;
    }
  }

  // ================= FAQ / FORM MODAL =================
  showFAQ = false;
  showForm = false;

  openFAQ(): void {
    this.showFAQ = true;
  }

  closeFAQ(): void {
    this.showFAQ = false;
  }

  openForm(): void {
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
  }

  // ================= LIFECYCLE =================
  async ngOnInit(): Promise<void> {

    // ✅ AOS fix (only browser)
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;

      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
      });
    }

    // ✅ tumhare existing functions
    this.startBannerAutoPlay();
    this.startTestimonialAuto();
  }


  ngOnDestroy(): void {
    this.stopBannerAutoPlay();
    this.stopTestimonialAuto();
  }
}