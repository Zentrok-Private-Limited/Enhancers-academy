import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;
  isCoursesDropdownOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.isCoursesDropdownOpen = false;
    }
  }

  toggleCoursesDropdown() {
    this.isCoursesDropdownOpen = !this.isCoursesDropdownOpen;
  }

  closeCoursesDropdown() {
    this.isCoursesDropdownOpen = false;
  }

  closeAllMenus() {
    this.isMenuOpen = false;
    this.isCoursesDropdownOpen = false;
  }
}