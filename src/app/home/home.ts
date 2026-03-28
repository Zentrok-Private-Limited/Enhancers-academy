import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AfterViewInit } from '@angular/core';
declare var Swiper: any;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule,],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  @ViewChild('bg') bg!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  // ================= BANNER SLIDER =================
  currentBanner = 0;
  bannerInterval: ReturnType<typeof setInterval> | null = null;

  banners = [
  {
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
      { icon: '<i class="fa-solid fa-chalkboard-user"></i>', title: 'Experienced Teachers', text: 'Highly qualified and experienced faculty.' },
      { icon: '<i class="fa-solid fa-user-group"></i>', title: 'Personal Attention', text: 'Small batches for better focus.' },
      { icon: '<i class="fa-solid fa-lightbulb"></i>', title: 'Concept Clarity', text: 'Deep understanding of subjects.' },
      { icon: '<i class="fa-solid fa-chart-line"></i>', title: 'Performance Tracking', text: 'Regular tests and feedback.' }
    ],
    image: '/teacher.png',
    badgeTopLabel: 'Top Faculty',
    badgeTopValue: 'Experienced Team',
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
    image: '/student.png',
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
    image: 'assets/students/s1.jpg'
  },
  {
    name: 'Sanjay Kumar',
    class: 'Class 12',
    score: '99.95%ile',
    exam: 'JEE Main',
    rank: '24',
    image: 'assets/students/s2.jpg'
  },
  {
    name: 'Priya Sharma',
    class: 'Class 12',
    score: '98.87%',
    exam: 'Boards',
    rank: 'Topper',
    image: 'assets/students/s3.jpg'
  },
  {
    name: 'Aman Verma',
    class: 'Class 11',
    score: '97.45%',
    exam: 'School Topper',
    rank: 'Top 5',
    image: 'assets/students/s4.jpg'
  },

  // 🔥 NEW 8 STUDENTS

  {
    name: 'Ankit Singh',
    class: 'Class 12',
    score: '99.92%ile',
    exam: 'JEE Main',
    rank: '56',
    image: 'assets/students/s5.jpg'
  },
  {
    name: 'Neha Gupta',
    class: 'Class 12',
    score: '98.75%',
    exam: 'Boards',
    rank: 'School Rank 1',
    image: 'assets/students/s6.jpg'
  },
  {
    name: 'Rahul Mehta',
    class: 'Class 12',
    score: '99.10%ile',
    exam: 'NEET',
    rank: 'Top 100',
    image: 'assets/students/s7.jpg'
  },
  {
    name: 'Sneha Jain',
    class: 'Class 11',
    score: '96.80%',
    exam: 'School Exams',
    rank: 'Topper',
    image: 'assets/students/s8.jpg'
  },
  {
    name: 'Karan Patel',
    class: 'Class 12',
    score: '99.01%ile',
    exam: 'JEE Main',
    rank: '89',
    image: 'assets/students/s9.jpg'
  },
  {
    name: 'Pooja Verma',
    class: 'Class 12',
    score: '97.95%',
    exam: 'Boards',
    rank: 'Top 3',
    image: 'assets/students/s10.jpg'
  },
  {
    name: 'Vikas Yadav',
    class: 'Class 12',
    score: '98.60%ile',
    exam: 'CUET',
    rank: 'Top 50',
    image: 'assets/students/s11.jpg'
  },
  {
    name: 'Isha Kapoor',
    class: 'Class 11',
    score: '95.40%',
    exam: 'School Exams',
    rank: 'Top 5',
    image: 'assets/students/s12.jpg'
  }
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
}