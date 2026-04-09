import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-class-11-12-commerce',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-11-12-commerce.html',
  styleUrl: './class-11-12-commerce.css',
})
export class Class1112Commerce implements OnInit {
  selectedClass: string = 'Class 11';

  classes = [
    {
      name: 'Class 11',
      title: 'Senior Secondary Foundation Program',
      duration: '12 Months Program',
      timing: '5 Days a Week',
      eligibility: 'Students studying in Class 11',
      subjects: ['Mathematics', 'Economics', 'Accountancy'],
      fee: '₹3,500 / month',
    },
    {
      name: 'Class 12',
      title: 'Board Preparation Program for Class 12',
      duration: '12 Months Program',
      timing: '5 Days a Week',
      eligibility: 'Students studying in Class 12',
      subjects: ['Mathematics', 'Economics', 'Accountancy'],
      fee: '₹4,000 / month',
    },
  ];

  selectClass(className: string): void {
    this.selectedClass = className;
  }

  get currentClass() {
    return this.classes.find((item) => item.name === this.selectedClass);
  }
  currentSlide = 0;

teachers = [
  {
    name: 'Ashutosh Shukla',
    subject: 'Mathematics Faculty',
    desc: 'Master mathematics with strong concepts and shortcut techniques.',
    image: '/ashutosh-shukla1.png'
  },
  {
    name: 'CS Nitin Gupta',
    subject: 'Commerce Faculty',
    desc: 'Learn Economics & Accountancy with practical understanding.',
    image: '/nitin-gupta.png'
  },
  {
    name: 'Guarv Arora',
    subject: 'English Faculty',
    desc: 'Improve grammar, vocabulary and communication skills.',
    image: '/guarv-arora.png'
  },
  {
    name: 'Kevin Ribeiro',
    subject: 'Science Faculty',
    desc: 'Understand Physics & Chemistry with real-life examples.',
    image: '/Kevin Ribeiro.png'
  },
  {
    name: 'Kiran Chawla',
    subject: 'All Subjects Faculty',
    desc: 'Learn coding and computer basics with practical projects.',
    image: '/kiran-chawla.png'
  }
];

ngOnInit() {
  setInterval(() => {
    this.currentSlide = (this.currentSlide + 1) % this.teachers.length;
  }, 3000);
}
}
