import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-spoken-english',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spoken-english.html',
  styleUrl: './spoken-english.css',
})
export class SpokenEnglish implements OnInit, OnDestroy {

  selectedClass: string = 'Spoken English Foundation';

  classes = [
  {
    name: 'Spoken English Foundation',
    short: 'SEF',
    title: 'Basic English Speaking & Grammar',
    duration: '3 Months Program',
    timing: '3 Days a Week',
    eligibility: 'Beginners (Students & Adults)',
    subjects: [
      'Basic Grammar',
      'Daily Use Sentences',
      'Vocabulary Building',
      'Simple Conversations'
    ],
    fee: '₹2,000 / month',
  },
  {
    name: 'Spoken English Advanced',
    short: 'SEA',
    title: 'Fluency & Communication Skills',
    duration: '4 Months Program',
    timing: '4 Days a Week',
    eligibility: 'Intermediate Learners',
    subjects: [
      'Fluency Practice',
      'Advanced Vocabulary',
      'Public Speaking',
      'Group Discussions'
    ],
    fee: '₹3,000 / month',
  },
  {
    name: 'Spoken English Crash Course',
    short: 'SEC',
    title: 'Fast Track Speaking Course',
    duration: '1 Month Program',
    timing: '5 Days a Week',
    eligibility: 'All Learners',
    subjects: [
      'Quick Speaking Practice',
      'Interview Preparation',
      'Confidence Building',
      'Real-Life Conversations'
    ],
    fee: '₹1,200 / month',
  },
];
  selectClass(className: string): void {
    this.selectedClass = className;
  }

  get currentClass() {
    return this.classes.find((item) => item.name === this.selectedClass);
  }

  // ===== Teacher Slider =====
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
      image: '/nitin-gupta.png'
    },
    {
      name: 'Kiran Chawla',
      subject: 'All Subjects',
      class: 'I - V',
      experience: '12 years',
      image: '/kiran-chawla.png'
    },
    {
      name: 'Kavin Ribeiro',
      subject: 'English & Social Science',
      class: 'VIII - XII',
      experience: '42 years',
      image: '/kevin-ribeiro.png'
    },
    {
      name: 'Ashutosh Shukla',
      subject: 'Physics & Math',
      class: 'IX - XII',
      experience: '8 years',
      image: '/ashutosh-shukla1.png'
    },
    {
      name: 'Gaurav Arora',
      subject: 'Science & Biology',
      class: 'IX - XII',
      experience: '12 years',
      image: '/guarv-arora.png'
    }
  ];


  get visibleCards() {
    if (window.innerWidth < 640) {
      return [this.teacherCards[this.active]];
    }

    return [
      this.teacherCards[(this.active - 1 + this.teacherCards.length) % this.teacherCards.length],
      this.teacherCards[this.active],
      this.teacherCards[(this.active + 1) % this.teacherCards.length]
    ];
  }

  startAutoSlide() {
    this.stopAutoSlide();
    this.interval = setInterval(() => {
      this.teacherNext();
    }, 1500);
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

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }
}