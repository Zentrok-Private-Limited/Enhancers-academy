import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-vedic-maths',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vedic-maths.html',
  styleUrl: './vedic-maths.css',
})
export class VedicMaths implements OnInit, OnDestroy {

  selectedClass: string = 'Vedic Maths Foundation';

  classes = [
    {
      name: 'Vedic Maths Foundation',
      short: 'VF',
      title: 'Basic to Intermediate Vedic Maths',
      duration: '3 Months Program',
      timing: '3 Days a Week',
      eligibility: 'Class III – VIII Students',
      subjects: ['Basic Sutras', 'Addition Tricks', 'Multiplication Tricks', 'Squares'],
      fee: '₹2,000 / month',
    },
    {
      name: 'Vedic Maths Advanced',
      short: 'VA',
      title: 'Advanced Speed Maths Techniques',
      duration: '4 Months Program',
      timing: '4 Days a Week',
      eligibility: 'Class VI – X Students',
      subjects: ['Advanced Multiplication', 'Division Tricks', 'Algebra Tricks', 'Speed Tests'],
      fee: '₹3,000 / month',
    },
    {
      name: 'Vedic Maths Crash Course',
      short: 'VC',
      title: 'Quick Speed Maths Training',
      duration: '1 Month Program',
      timing: '5 Days a Week',
      eligibility: 'All Students',
      subjects: ['Fast Tricks', 'Practice Sets', 'Speed Improvement', 'Mock Tests'],
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