import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  ElementRef,
  ViewChildren,
  QueryList,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
// import { AfterViewInit } from '@angular/core';
declare var Swiper: any;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit, OnDestroy, AfterViewInit {
  /* ================= COUNTER ================= */
  @ViewChildren('counter') counters!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('bg') bg!: ElementRef;
  hasAnimated = false;

  ngAfterViewInit(): void {
    const section = this.el.nativeElement.querySelector('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.startCounter();
            this.hasAnimated = true;
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(section);
  }

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
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef,
  ) {}

  // ================= BANNER SLIDER =================
  currentBanner = 0;
  bannerInterval: ReturnType<typeof setInterval> | null = null;

  // banner.component.ts
  banners = [
    {
      title1: 'Enhancers',
      title2: 'Academy',
      title3: 'Success Hub',
      desc: 'Building strong academic foundations with expert guidance',

      highlights: [
        'Experienced & Dedicated Teachers',
        'Result-Oriented Teaching Approach',
        'Friendly & Motivating Environment',
      ],

      cta: 'Know More',
      image: '/23.png',
      bg: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/bg6.jpg)',
      btn:'/contact'
    },
    {
      title1: 'Learn from',
      title2: 'Top Expert Teachers',
      title3: 'Right in Your City',
      desc: 'Classes I–XII | CUET & School Preparation',

      highlights: [
        'Personal Mentors for Every Student',
        'Small Batches for Better Focus',
        'Regular Tests with Performance Tracking',
      ],

      cta: 'Book Free Demo',
      image: '/25.png',
      bg: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/bg4.jpg)',
      btn:'/contact'
    },

    {
      title1: 'Master',
      title2: 'Maths • Science',
      title3: 'English with Ease',
      desc: 'Strong academic support for Classes I–X',

      highlights: [
        'Concept Clarity with Smart Learning',
        'Daily Practice & Doubt Solving',
        'Personal Attention for Every Student',
      ],

      cta: 'Enroll Now',
      image: '/24.png',
      bg: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/bg10.jpg)',
      btn:'/contact'
    },

    {
      title1: 'Prepare Smart',
      title2: 'Crack CUET',
      title3: 'With Confidence',
      desc: 'Focused preparation for CUET & entrance exams',

      highlights: [
        'Mock Tests Based on Latest Pattern',
        'Expert Guidance & Strategy',
        'Build Confidence with Real Exam Practice',
      ],

      cta: 'Start Your Preparation',
      image: '/banner3.png',
      bg: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/bg8.jpg)',
      btn:'/contact'
    },

    

    // ✅ NEW 2: Top Students / Results
    {
      title1: 'Our',
      title2: 'Top Performers',
      title3: 'Make Us Proud',
      desc: 'Consistent results with high achievers every year',

      highlights: [
        'Top Scores in School Exams',
        'Outstanding CUET Results',
        'Regular Rank Holders',
      ],

      cta: 'View Results',
      image: '/20.png',
      bg: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/bg7.jpg)',
      btn:'/contact'
    },

    // ✅ NEW 3: Class 1 to 8
    {
      title1: 'Strong Start for',
      title2: 'Classes 1 to 8',
      title3: 'Build Basics Right',
      desc: 'Foundation courses for young learners',

      highlights: [
        'Focus on Basics & Concepts',
        'Fun & Interactive Learning',
        'Regular Practice & Feedback',
      ],

      cta: 'Join Now',
      image: '/22.png',
      bg: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/bg9.jpg)',
      btn:'/contact'
    },
  ];

  startAuto() {
    setInterval(() => {
      this.currentBanner = (this.currentBanner + 1) % this.banners.length;
    }, 4000);
  }

  goToBanner(index: number) {
    this.currentBanner = index;
  }
  // ===================== top student ===========================
  topStudents = [
    {
      name: 'Riddhesh B',
      class: 'Class 12',
      score: '99.99%ile',
      exam: 'JEE Main',
      rank: '1',
      image: '/1.png',
    },
    {
      name: 'Sanjay Kumar',
      class: 'Class 12',
      score: '99.95%ile',
      exam: 'JEE Main',
      rank: '24',
      image: '/1.png',
    },
    {
      name: 'Priya Sharma',
      class: 'Class 12',
      score: '98.87%',
      exam: 'Boards',
      rank: 'Topper',
      image: '/1.png',
    },
    {
      name: 'Aman Verma',
      class: 'Class 11',
      score: '97.45%',
      exam: 'School Topper',
      rank: 'Top 5',
      image: '/1.png',
    },

    // 🔥 NEW 8 STUDENTS

    {
      name: 'Ankit Singh',
      class: 'Class 12',
      score: '99.92%ile',
      exam: 'JEE Main',
      rank: '56',
      image: '/1.png',
    },
    {
      name: 'Neha Gupta',
      class: 'Class 12',
      score: '98.75%',
      exam: 'Boards',
      rank: 'School Rank 1',
      image: '/1.png',
    },
    {
      name: 'Rahul Mehta',
      class: 'Class 12',
      score: '99.10%ile',
      exam: 'NEET',
      rank: 'Top 100',
      image: '/1.png',
    },
    {
      name: 'Sneha Jain',
      class: 'Class 11',
      score: '96.80%',
      exam: 'School Exams',
      rank: 'Topper',
      image: '/1.png',
    },
  ];
  // ================= TESTIMONIAL SLIDER =================
  testimonialIndex = 0;
  testimonialInterval: ReturnType<typeof setInterval> | null = null;

  testimonials = [
    {
      name: 'Riya Sharma',
      role: 'Class 12 Student',
      text: 'Enhancers Academy helped me score 95% in boards.',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Amit Verma',
      role: 'Parent',
      text: 'Great teachers and personal attention for every student.',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Rahul Gupta',
      role: 'CUET Aspirant',
      text: 'Mock tests and guidance helped me crack CUET.',
      img: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
  ];

  nextTestimonial(): void {
    this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length;
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
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;

      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
      });
    }

    // this.startBannerAutoPlay();
    this.startTestimonialAuto();
    this.startTeacherAuto();
    this.startAutoSlide();
    this.startAuto();
  }

  ngOnDestroy(): void {
    // this.stopBannerAutoPlay();
    this.stopTestimonialAuto();
    this.stopTeacherAuto();
    clearInterval(this.interval);
  }

  // ================= TEACHER SLIDER =================
  teacherIndex = 0;
  teacherInterval: any;
  teachers = [
    {
      name: 'Nitin Gupta',
      subject: 'Accountancy & Economics',
      description:
        '10+ years of teaching experience with a strong focus on concept clarity and student growth.',
      image: '/no-image.png',
    },
    {
      name: 'Ashutosh shukla',
      subject: 'Math',
      description: 'Simplifying concepts with practical examples for deeper understanding.',
      image: '/no-image.png',
    },
    // {
    //   name: 'Neha Gupta',
    //   subject: 'English',
    //   description: 'Grammar + communication expert.',
    //   image: '/no-image.png'
    // },
    {
      name: 'Kiran Chawla',
      subject: 'All Subject',
      description:
        'Expert in teaching all subjects for Classes 1–5 with a focus on strong fundamentals.',
      image: '/no-image.png',
    },
    // {
    //   name: 'Rohit Kumar',
    //   subject: 'Physics',
    //   description: 'Strong fundamentals and problem solving.',
    //   image: 'https://randomuser.me/api/portraits/men/22.jpg'
    // }
  ];

  nextTeacher() {
    this.teacherIndex = (this.teacherIndex + 1) % this.teachers.length;
  }

  startTeacherAuto() {
    this.teacherInterval = setInterval(() => {
      this.nextTeacher();
    }, 3000);
  }

  stopTeacherAuto() {
    clearInterval(this.teacherInterval);
  }

  courses = [
    {
      title: 'Classes I – VIII',
      slug: '/courses/class-1-8',
      desc: 'Strong foundation with all subjects.',
      icon: 'fa-solid fa-graduation-cap',
      category: 'Academic',
    },
    {
      title: 'Classes IX – X',
      slug: '/courses/class-9-10',
      desc: 'Maths, Science & English focus.',
      icon: 'fa-solid fa-book-open',
      category: 'Academic',
    },
    {
      title: 'XI – XII (Commerce)',
      slug: '/courses/class-11-12',
      desc: 'Accounts, Economics, Mathematics & Business studies.',
      icon: 'fa-solid fa-chart-line',
      category: 'Academic',
    },
    {
      title: 'XI – XII (Science)',
      slug: '/courses/class-11-12-commerce',
      desc: 'Physics, Chemistry, Biology & Maths (PCM).',
      icon: 'fa-solid fa-flask',
      category: 'Academic',
    },
    {
      title: 'Entrance Exams',
      slug: '/courses/cuet',
      desc: 'Preparation for NEET, CUET & JEE.',
      icon: 'fa-solid fa-bullseye',
      category: 'Entrance',
    },
    {
      title: 'Olympiad Preparation',
      slug: '/courses/olympiad',
      desc: 'Maths & Science olympiad training.',
      icon: 'fa-solid fa-brain',
      category: 'Entrance',
    },
    {
      title: 'Spoken English',
      slug: '/courses/spoken-english',
      desc: 'Improve communication & confidence.',
      icon: 'fa-solid fa-comments',
      category: 'Skills',
    },
    {
      title: 'Vedic Maths',
      slug: '/courses/vedic-maths',
      desc: 'Fast calculation techniques & tricks.',
      icon: 'fa-solid fa-calculator',
      category: 'Skills',
    },
  ];

  // ===================------------roadmap ts ------=====================
  steps = [
    {
      icon: 'fas fa-bullseye',
      title: 'Guidance',
      desc: 'Start with proper planning and expert direction.',
    },
    {
      icon: 'fas fa-book-open',
      title: 'Study Material',
      desc: 'Notes and worksheets for concept clarity.',
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Classes',
      desc: 'Interactive sessions with doubt solving.',
    },
    {
      icon: 'fas fa-pen',
      title: 'Tests',
      desc: 'Regular tests to track progress.',
    },
    {
      icon: 'fas fa-trophy',
      title: 'Results',
      desc: 'Achieve success with confidence.',
    },
  ];

  currentIndex = 2;

  next() {
    if (this.currentIndex < this.steps.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  email: string = '';
  showToast = false;

  subscribe() {
    if (!this.email) return;

    this.showToast = true;
    this.email = '';

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
  // ==============teacher card slider===================
  active = 0;
  interval: any;

  touchStartX = 0;
  touchEndX = 0;

  teacherCards = [
    {
      name: 'CS Nitin Gupta',
      subject: 'Accountancy & Economics',
      class: 'XI - XII',
      experience: '26 years',
      image: '/nitin-gupta.png',
    },
    {
      name: 'Kiran Chawla',
      subject: 'All Subjects',
      class: 'I - V',
      experience: '12 years',
      image: '/kiran-chawla.png',
    },
    {
      name: 'Kavin Ribeiro',
      subject: 'English & Social Science',
      class: 'VIII - XII',
      experience: '42 years',
      image: '/kevin-ribeiro.png',
    },
    {
      name: 'Ashutosh Shukla',
      subject: 'Physics & Math',
      class: 'IX - XII',
      experience: '8 years',
      image: '/ashutosh-shukla1.png',
    },
    {
      name: 'Gaurav Arora',
      subject: 'Science & Biology',
      class: 'IX - XII',
      experience: '12 years',
      image: '/guarv-arora.png',
    },
  ];

  get visibleCards() {
    // 📱 Mobile → only 1 card
    if (window.innerWidth < 640) {
      return [this.teacherCards[this.active]];
    }

    // 💻 Desktop → 3 cards
    return [
      this.teacherCards[(this.active - 1 + this.teacherCards.length) % this.teacherCards.length],
      this.teacherCards[this.active],
      this.teacherCards[(this.active + 1) % this.teacherCards.length],
    ];
  }

  startAutoSlide() {
    this.stopAutoSlide(); // important (duplicate interval fix)
    this.interval = setInterval(() => {
      this.teacherNext();
    }, 3000);
  }

  stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  teacherNext() {
    this.active = (this.active + 1) % this.teacherCards.length;
  }

  teacherPrev() {
    this.active = (this.active - 1 + this.teacherCards.length) % this.teacherCards.length;
  }

  goToSlide(index: number) {
    this.active = index;
  }

  // SWIPE
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;

    if (this.touchStartX - this.touchEndX > 50) {
      this.teacherNext();
    }

    if (this.touchEndX - this.touchStartX > 50) {
      this.teacherPrev();
    }
  }
}
