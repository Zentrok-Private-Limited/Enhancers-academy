import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cuet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuet.html',
  styleUrl: './cuet.css',
})
export class Cuet {
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
}
