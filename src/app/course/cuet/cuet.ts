import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cuet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuet.html',
  styleUrl: './cuet.css',
})
export class Cuet implements OnInit, OnDestroy {
 selectedClass: string = 'CUET Complete Course';

  classes = [
    {
      name: 'CUET Complete Course',
      short: 'CC',
      title: 'Complete CUET Preparation Program',
      duration: '6 Months Program',
      timing: '5 Days a Week',
      eligibility: 'Students preparing for CUET UG',
      subjects: ['Domain Subjects', 'Language Test', 'General Test', 'Mock Tests', 'PYQs'],
      fee: '₹4,500 / month',
    },
    {
      name: 'CUET Crash Course',
      short: 'CR',
      title: 'Fast-Track CUET Revision Program',
      duration: '3 Months Program',
      timing: '6 Days a Week',
      eligibility: 'Students appearing in CUET soon',
      subjects: ['Quick Revision', 'Important Topics', 'Mock Tests', 'PYQs', 'Exam Strategy'],
      fee: '₹3,500 / month',
    },
    {
      name: 'CUET Test Series',
      short: 'TS',
      title: 'Mock Tests & Performance Analysis',
      duration: '2 Months Program',
      timing: '3 Days a Week',
      eligibility: 'Students needing practice and testing',
      subjects: ['Sectional Tests', 'Full-Length Mocks', 'PYQs', 'Analysis', 'Doubt Sessions'],
      fee: '₹2,000 / month',
    },
  ];

  selectClass(className: string): void {
    this.selectedClass = className;
  }

  get currentClass() {
    return this.classes.find((item) => item.name === this.selectedClass);
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

  // 📱 Mobile → only 1 card
  if (window.innerWidth < 640) {
    return [this.teacherCards[this.active]];
  }

  // 💻 Desktop → 3 cards
  return [
    this.teacherCards[(this.active - 1 + this.teacherCards.length) % this.teacherCards.length],
    this.teacherCards[this.active],
    this.teacherCards[(this.active + 1) % this.teacherCards.length]
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
    this.active =
      (this.active - 1 + this.teacherCards.length) % this.teacherCards.length;
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
  ngOnInit(): void {
    this.startAutoSlide();  
  }
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }
}
