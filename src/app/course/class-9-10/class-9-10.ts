import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-9-10',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-9-10.html',
  styleUrl: './class-9-10.css',
})
export class Class910 {
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
}