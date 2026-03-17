import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {

  // ================= HERO SLIDER =================
  currentSlide = 0;
  heroInterval: any;

  slides = [
    {
      title: 'Boost Your Career with Enhancers Academy',
      desc: 'Classes IX–XII | CUET Preparation | Expert Faculty',
      img: 'https://img.freepik.com/free-vector/online-learning-concept_52683-37480.jpg'
    },
    {
      title: 'Expert Teachers & Smart Learning',
      desc: 'Learn from experienced faculty and improve results',
      img: 'https://img.freepik.com/free-vector/education-concept-illustration_114360-7926.jpg'
    },
    {
      title: 'Start Your Journey Today',
      desc: 'Join now and achieve your academic goals',
      img: 'https://img.freepik.com/free-vector/students-learning-online_52683-38070.jpg'
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  startHeroAuto() {
    this.heroInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopHeroAuto() {
    clearInterval(this.heroInterval);
  }


  // ================= TESTIMONIAL SLIDER =================
  testimonialIndex = 0;
  testimonialInterval: any;

  testimonials = [
  {
    name: 'Riya Sharma',
    role: 'Class 12 Student',
    text: 'Enhancers Academy helped me score 95% in boards.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Amit Verma',
    role: 'Parent',
    text: 'Great teachers and personal attention for every student.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Rahul Gupta',
    role: 'CUET Aspirant',
    text: 'Mock tests and guidance helped me crack CUET.',
    img: 'https://randomuser.me/api/portraits/men/45.jpg'
  }
];

  nextTestimonial() {
    this.testimonialIndex =
      (this.testimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.testimonialIndex =
      (this.testimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  startTestimonialAuto() {
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 4000);
  }

  stopTestimonialAuto() {
    clearInterval(this.testimonialInterval);
  }


  // ================= LIFECYCLE =================
  ngOnInit() {
    this.startHeroAuto();
    this.startTestimonialAuto();
  }

  ngOnDestroy() {
    this.stopHeroAuto();
    this.stopTestimonialAuto();
  }

  showFAQ = false;
showForm = false;

openFAQ() {
  this.showFAQ = true;
}

closeFAQ() {
  this.showFAQ = false;
}

openForm() {
  this.showForm = true;
}

closeForm() {
  this.showForm = false;
}
}