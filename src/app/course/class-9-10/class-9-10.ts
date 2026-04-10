import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-9-10',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-9-10.html',
  styleUrl: './class-9-10.css',
})
export class Class910 implements OnInit, OnDestroy {
  selectedClass: string = 'Class 9';

  classes = [
    {
      name: 'Class 9',
      title: 'Foundation Program for Class 9',
      duration: '12 Months Program',
      timing: '4 Days a Week',
      eligibility: 'Students studying in Class 9',
      subjects: ['Mathematics', 'Science', 'English', 'Social Science'],
      fee: '₹2,500 / month',
    },
    {
      name: 'Class 10',
      title: 'Board Preparation Program for Class 10',
      duration: '12 Months Program',
      timing: '5 Days a Week',
      eligibility: 'Students studying in Class 10',
      subjects: ['Mathematics', 'Science', 'English', 'Social Science'],
      fee: '₹3,000 / month',
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