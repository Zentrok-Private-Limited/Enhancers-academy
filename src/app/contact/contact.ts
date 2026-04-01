import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
onEnquire() {
    console.log('Enquire clicked');
    // 👉 yaha tum form section scroll ya popup open kar sakti ho
  }

  onCall() {
    window.location.href = 'tel:+919876543210';
  }
}
