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
    // ✅ CUET
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

    // ✅ IELTS
    {
      name: 'IELTS Preparation',
      short: 'IEL',
      title: 'Complete IELTS Training (Academic + General)',
      duration: '2 Months Program',
      timing: '5 Days a Week',
      eligibility: 'Students & Professionals',
      subjects: ['Reading', 'Writing', 'Speaking', 'Listening', 'Mock Tests'],
      fee: '₹6,000 / month',
    },

    // ✅ NDA
    {
      name: 'NDA Foundation',
      short: 'NDA',
      title: 'NDA Written Exam + SSB Prep',
      duration: '6 Months Program',
      timing: '5 Days a Week',
      eligibility: 'Class 11–12 Students',
      subjects: ['Maths', 'GAT', 'English', 'GK', 'Mock Tests'],
      fee: '₹3,500 / month',
    },

    // ✅ CLAT
    {
      name: 'CLAT Preparation',
      short: 'CL',
      title: 'Law Entrance Preparation',
      duration: '5 Months Program',
      timing: '5 Days a Week',
      eligibility: 'Class 11–12 Students',
      subjects: ['Legal Reasoning', 'English', 'GK', 'Logical Reasoning', 'Mocks'],
      fee: '₹4,000 / month',
    },

    // ✅ SSC
    {
      name: 'SSC Preparation',
      short: 'SSC',
      title: 'SSC CGL / CHSL Complete Course',
      duration: '4 Months Program',
      timing: '5 Days a Week',
      eligibility: 'Graduates',
      subjects: ['Quant', 'Reasoning', 'English', 'GK', 'Mock Tests'],
      fee: '₹3,000 / month',
    },

    // ✅ Banking
    {
      name: 'Banking Exams',
      short: 'BANK',
      title: 'IBPS / SBI PO & Clerk Preparation',
      duration: '4 Months Program',
      timing: '5 Days a Week',
      eligibility: 'Graduates',
      subjects: ['Quant', 'Reasoning', 'English', 'Computer', 'Mocks'],
      fee: '₹3,500 / month',
    },

    // ✅ UPSC (Basic)
    {
      name: 'UPSC Foundation',
      short: 'UPSC',
      title: 'IAS Prelims + Basics',
      duration: '8 Months Program',
      timing: '5 Days a Week',
      eligibility: 'Graduates / Aspirants',
      subjects: ['Polity', 'History', 'Geography', 'Economy', 'Current Affairs'],
      fee: '₹6,000 / month',
    },

    // ✅ Railway
    {
      name: 'Railway Exams',
      short: 'RRB',
      title: 'RRB NTPC / Group D Preparation',
      duration: '3 Months Program',
      timing: '5 Days a Week',
      eligibility: '10th / 12th / Graduates',
      subjects: ['Maths', 'Reasoning', 'GK', 'Mock Tests'],
      fee: '₹2,500 / month',
    },

    // ✅ Defence (Agniveer)
    {
      name: 'Agniveer Preparation',
      short: 'AG',
      title: 'Army / Navy / Airforce Preparation',
      duration: '3 Months Program',
      timing: '5 Days a Week',
      eligibility: '10th / 12th Students',
      subjects: ['Maths', 'Reasoning', 'GK', 'Physical Guidance'],
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
