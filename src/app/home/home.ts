import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ElementRef, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AfterViewInit } from '@angular/core';
declare var Swiper: any;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
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
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.startCounter();
            this.hasAnimated = true;
          }
        });
      },
      { threshold: 0.4 }
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
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef) { }


  // ================= BANNER SLIDER =================
  currentBanner = 0;
  bannerInterval: ReturnType<typeof setInterval> | null = null;

  banners = [
    {
      title1: 'Welcome to',
      title2: 'Enhancers Academy',
      title3: 'Shape Your Future',

      desc: 'Enhancers Academy provides expert coaching for Classes I–XII with a focus on concept clarity, personal attention, and result-oriented learning. We prepare students for school exams and competitive exams like CUET.',

      stat1: 'I–XII',
      stat1Label: 'All Classes',
      stat2: '10+',
      stat2Label: 'Expert Faculty',
      stat3: '95%+',
      stat3Label: 'Results',

      featureTitle: 'Why Choose Us',

      features: [
        { icon: '<i class="fa-solid fa-user-graduate"></i>', title: 'All Classes Covered', text: 'Coaching for Classes I to XII with all major subjects.' },
        { icon: '<i class="fa-solid fa-chalkboard-user"></i>', title: 'Expert Teachers', text: 'Highly experienced faculty with strong subject knowledge.' },
        { icon: '<i class="fa-solid fa-layer-group"></i>', title: 'Small Batches', text: 'Personal attention for every student.' },
        { icon: '<i class="fa-solid fa-chart-line"></i>', title: 'Regular Tests', text: 'Performance tracking with tests and feedback.' }
      ],

      image: '/banner1.png', 

      badgeTopLabel: 'Branch 1',
      badgeTopValue: 'F-10, Prashant Vihar',

      badgeBottomLabel: 'Branch 2',
      badgeBottomValue: 'QU 233-C Pitampura'
    },
    {
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
      image: '/banner2.png',
      badgeTopLabel: 'Call Now',
      badgeTopValue: '95991 27878',
      badgeBottomLabel: 'Also Call',
      badgeBottomValue: '98687 26527'
    },

    {
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
      image: '/banner3.png',
      badgeTopLabel: 'Main Contact',
      badgeTopValue: '95991 27878',
      badgeBottomLabel: 'Support Contact',
      badgeBottomValue: '98687 26527'
    },

    // 🔥 NEW 1: TEACHERS BANNER
    {
      title1: 'Learn From',
      title2: 'Expert Teachers',
      title3: 'Best Guidance',
      desc: 'Our experienced teachers focus on concept clarity, personal attention, and consistent performance improvement.',

      stat1: '10+',
      stat1Label: 'Years Experience',
      stat2: 'Expert',
      stat2Label: 'Faculty',
      stat3: '100%',
      stat3Label: 'Support',

      featureTitle: 'Our Faculty',
      features: [
        { icon: '<i class="fa-solid fa-bullseye"></i>', title: 'CS Nitin Gupta', text: 'Accountancy & Economics expert with 26 years of experience.' },
        { icon: '<i class="fa-solid fa-file-pen"></i>', title: 'Ashutosh Shukla', text: 'Mathematics and Physics expert with 8 years of experience.' },
        { icon: '<i class="fa-solid fa-chalkboard-user"></i>', title: 'Gaurav Arora', text: 'Science and Biology expert with 12 years of experience.' },
        { icon: '<i class="fa-solid fa-rocket"></i>', title: 'Kevin Ribeiro', text: 'English & Social Science expert with 42 years of experience.' }
      ],
      teachers: [
        {
          name: 'CS Nitin Gupta',
          image: '/nitin-gupta.png'
        },
        {
          name: 'Ashutosh Shukla',
          image: '/ashutosh-shukla1.png'
        },
        {
          name: 'Guarv Arora',
          image: '/guarv-arora.png'
        },
        {
          name: 'Kevin Ribeiro',
          image: '/teacher4.png'
        }
      ],

      badgeBottomLabel: 'Join Now',
      badgeBottomValue: 'Limited Seats'
    },

    // 🔥 NEW 2: TOP STUDENTS BANNER
    {
      title1: 'Our Top',
      title2: 'Students',
      title3: 'Achievements',
      desc: 'Our students consistently achieve top ranks and excellent results in board exams and competitive tests.',
      stat1: '95%+',
      stat1Label: 'Board Results',
      stat2: 'Top',
      stat2Label: 'Rankers',
      stat3: '100%',
      stat3Label: 'Success',
      featureTitle: 'Student Success',
      features: [
        { icon: '<i class="fa-solid fa-trophy"></i>', title: 'Top Results', text: 'Students scoring 90%+ consistently.' },
        { icon: '<i class="fa-solid fa-medal"></i>', title: 'Rank Holders', text: 'Top ranks in school and exams.' },
        { icon: '<i class="fa-solid fa-star"></i>', title: 'Excellent Growth', text: 'Improvement in every student.' },
        { icon: '<i class="fa-solid fa-graduation-cap"></i>', title: 'Success Stories', text: 'Real student achievements.' }
      ],
      image: '/banner4.png',
      badgeTopLabel: 'Top Score',
      badgeTopValue: '95%+',
      badgeBottomLabel: 'Join Achievers',
      badgeBottomValue: 'Enroll Now'
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

  // ===================== top student ===========================
  topStudents = [
    {
      name: 'Riddhesh B',
      class: 'Class 12',
      score: '99.99%ile',
      exam: 'JEE Main',
      rank: '1',
      image: '/1.png'
    },
    {
      name: 'Sanjay Kumar',
      class: 'Class 12',
      score: '99.95%ile',
      exam: 'JEE Main',
      rank: '24',
      image: '/1.png'
    },
    {
      name: 'Priya Sharma',
      class: 'Class 12',
      score: '98.87%',
      exam: 'Boards',
      rank: 'Topper',
      image: '/1.png'
    },
    {
      name: 'Aman Verma',
      class: 'Class 11',
      score: '97.45%',
      exam: 'School Topper',
      rank: 'Top 5',
      image: '/1.png'
    },

    // 🔥 NEW 8 STUDENTS

    {
      name: 'Ankit Singh',
      class: 'Class 12',
      score: '99.92%ile',
      exam: 'JEE Main',
      rank: '56',
      image: '/1.png'
    },
    {
      name: 'Neha Gupta',
      class: 'Class 12',
      score: '98.75%',
      exam: 'Boards',
      rank: 'School Rank 1',
      image: '/1.png'
    },
    {
      name: 'Rahul Mehta',
      class: 'Class 12',
      score: '99.10%ile',
      exam: 'NEET',
      rank: 'Top 100',
      image: '/1.png'
    },
    {
      name: 'Sneha Jain',
      class: 'Class 11',
      score: '96.80%',
      exam: 'School Exams',
      rank: 'Topper',
      image: '/1.png'
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

    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;

      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
      });
    }

    this.startBannerAutoPlay();
    this.startTestimonialAuto();
    this.startTeacherAuto();
    // this.startTeacherAuto();
    // this.stopTeacherAuto();
  }


  ngOnDestroy(): void {
    this.stopBannerAutoPlay();
    this.stopTestimonialAuto();
    this.stopTeacherAuto();
  }

  // ================= TEACHER SLIDER =================
  teacherIndex = 0;
  teacherInterval: any;
  teachers = [
    {
      name: 'Nitin Gupta',
      subject: 'Accountancy & Economics',
      description: '10+ years of teaching experience with a strong focus on concept clarity and student growth.',
      image: '/no-image.png'
    },
    {
      name: 'Ashutosh shukla',
      subject: 'Math',
      description: 'Simplifying concepts with practical examples for deeper understanding.',
      image: '/no-image.png'
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
      description: 'Expert in teaching all subjects for Classes 1–5 with a focus on strong fundamentals.',
      image: '/no-image.png'
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
      category: 'Academic'
    },
    {
      title: 'Classes IX – X',
      slug: '/courses/class-9-10',
      desc: 'Maths, Science & English focus.',
      icon: 'fa-solid fa-book-open',
      category: 'Academic'
    },
    {
      title: 'XI – XII (Commerce)',
      slug: '/courses/class-11-12',
      desc: 'Accounts, Economics, Mathematics & Business studies.',
      icon: 'fa-solid fa-chart-line',
      category: 'Academic'
    },
    {
      title: 'XI – XII (Science)',
      slug: '/courses/class-11-12-commerce',
      desc: 'Physics, Chemistry, Biology & Maths (PCM).',
      icon: 'fa-solid fa-flask',
      category: 'Academic'
    },
    {
      title: 'Entrance Exams',
      slug: '/courses/cuet',
      desc: 'Preparation for NEET, CUET & JEE.',
      icon: 'fa-solid fa-bullseye',
      category: 'Entrance'
    },
    {
      title: 'Olympiad Preparation',
      slug: '/courses/olympiad',
      desc: 'Maths & Science olympiad training.',
      icon: 'fa-solid fa-brain',
      category: 'Entrance'
    },
    {
      title: 'Spoken English',
      slug: '/courses/spoken-english',
      desc: 'Improve communication & confidence.',
      icon: 'fa-solid fa-comments',
      category: 'Skills'
    },
    {
      title: 'Vedic Maths',
      slug: '/courses/vedic-maths',
      desc: 'Fast calculation techniques & tricks.',
      icon: 'fa-solid fa-calculator',
      category: 'Skills'
    }
  ];

  // ===================------------roadmap ts ------=====================
  steps = [
    {
      icon: 'fas fa-bullseye',
      title: 'Guidance',
      desc: 'Start with proper planning and expert direction.'
    },
    {
      icon: 'fas fa-book-open',
      title: 'Study Material',
      desc: 'Notes and worksheets for concept clarity.'
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Classes',
      desc: 'Interactive sessions with doubt solving.'
    },
    {
      icon: 'fas fa-pen',
      title: 'Tests',
      desc: 'Regular tests to track progress.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Results',
      desc: 'Achieve success with confidence.'
    }
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
}