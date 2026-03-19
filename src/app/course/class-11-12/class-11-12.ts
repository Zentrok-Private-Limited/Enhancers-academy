import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-11-12',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-11-12.html',
  styleUrl: './class-11-12.css',
})
export class Class1112 {
  selectedClass: string = 'Class 11';

  classes = [
    {
      name: 'Class 11',
      title: 'Senior Secondary Foundation Program',
      duration: '12 Months Program',
      timing: '5 Days a Week',
      eligibility: 'Students studying in Class 11',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Accountancy', 'Economics', 'Business Studies', 'English'],
      fee: '₹3,500 / month',
    },
    {
      name: 'Class 12',
      title: 'Board Preparation Program for Class 12',
      duration: '12 Months Program',
      timing: '5 Days a Week',
      eligibility: 'Students studying in Class 12',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Accountancy', 'Economics', 'Business Studies', 'English'],
      fee: '₹4,000 / month',
    },
  ];

  selectClass(className: string): void {
    this.selectedClass = className;
  }

  get currentClass() {
    return this.classes.find((item) => item.name === this.selectedClass);
  }
}