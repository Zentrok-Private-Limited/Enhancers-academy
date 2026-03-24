import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-class-1-8',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './class-1-8.html',
  styleUrl: './class-1-8.css',
})
export class Class18 {
selectedClass = 'Class 1';

  classes = [
    {
      name: 'Class 1',
      title: 'Course for Class 1',
      duration: 'April 2026 - March 2027',
      timing: 'Mon-Fri (1.5 hrs) • Sat Test / Revision',
      eligibility: 'For Class 1 Students',
      fee: '₹ 3,000',
      subjects: ['Hindi', 'English', 'Maths', 'Notes']
    },
    {
      name: 'Class 2',
      title: 'Course for Class 2',
      duration: 'April 2026 - March 2027',
      timing: 'Mon-Fri (1.5 hrs) • Sat Test / Revision',
      eligibility: 'For Class 2 Students',
      fee: '₹ 3,200',
      subjects: ['Hindi', 'English', 'Maths', 'Notes']
    },
    {
      name: 'Class 3',
      title: 'Course for Class 3',
      duration: 'April 2026 - March 2027',
      timing: 'Mon-Fri (2 hrs) • Sat Test / Revision',
      eligibility: 'For Class 3 Students',
      fee: '₹ 3,500',
      subjects: ['Hindi', 'English', 'Maths', 'EVS', 'Notes']
    },
    {
      name: 'Class 4',
      title: 'Course for Class 4',
      duration: 'April 2026 - March 2027',
      timing: 'Mon-Fri (2 hrs) • Sat Test / Revision',
      eligibility: 'For Class 4 Students',
      fee: '₹ 3,800',
      subjects: ['Hindi', 'English', 'Maths', 'EVS', 'Notes']
    },
    {
      name: 'Class 5',
      title: 'Course for Class 5',
      duration: 'April 2026 - March 2027',
      timing: 'Mon-Fri (2 hrs) • Sat Test / Revision',
      eligibility: 'For Class 5 Students',
      fee: '₹ 4,000',
      subjects: ['Hindi', 'English', 'Maths', 'EVS / SST', 'Notes']
    },
    {
      name: 'Class 6',
      title: 'Course for Class 6',
      duration: 'April 2026 - March 2027',
      timing: 'Mon-Fri (2 hrs) • Sat-Sun (2 hrs)',
      eligibility: 'For Class 6 Students',
      fee: '₹ 4,500',
      subjects: ['Hindi', 'English', 'Maths', 'Science', 'SST', 'Notes']
    },
    {
      name: 'Class 7',
      title: 'Course for Class 7',
      duration: 'April 2026 - March 2027',
      timing: 'Mon-Fri (2 hrs) • Sat-Sun (2 hrs)',
      eligibility: 'For Class 7 Students',
      fee: '₹ 4,800',
      subjects: ['Hindi', 'English', 'Maths', 'Science', 'SST', 'Notes']
    },
    {
      name: 'Class 8',
      title: 'Course for Class 8',
      duration: 'April 2026 - March 2027',
      timing: 'Mon-Fri (2 hrs) • Sat-Sun (2 hrs)',
      eligibility: 'For Class 8 Students',
      fee: '₹ 5,000',
      subjects: ['Hindi', 'English', 'Maths', 'Science', 'SST', 'Notes']
    }
  ];

  selectClass(className: string) {
    this.selectedClass = className;
  }

  get currentClass() {
    return this.classes.find(item => item.name === this.selectedClass);
  }
}
