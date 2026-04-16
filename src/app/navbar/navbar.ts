import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, Renderer2, Inject } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // ===== DESKTOP =====
  isMenuOpen = false;
  isCoursesDropdownOpen = false;

  // ===== MOBILE =====
  isMobileCoursesOpen = false;

  @ViewChild('coursesMenu') coursesMenu?: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {
    // ✅ Auto cleanup on route change (IMPORTANT FIX)
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeAllMenus();
      });
  }

  // =========================
  // SAFE SCROLL UNLOCK
  // =========================
  private unlockScroll() {
    this.renderer.removeClass(this.document.body, 'overflow-hidden');
  }

  private lockScroll() {
    this.renderer.addClass(this.document.body, 'overflow-hidden');
  }

  // =========================
  // MOBILE MENU TOGGLE
  // =========================
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.lockScroll();
    } else {
      this.isCoursesDropdownOpen = false;
      this.isMobileCoursesOpen = false;
      this.unlockScroll();
    }
  }

  // =========================
  // DESKTOP DROPDOWN
  // =========================
  toggleCoursesDropdown() {
    this.isCoursesDropdownOpen = !this.isCoursesDropdownOpen;
  }

  closeCoursesDropdown() {
    this.isCoursesDropdownOpen = false;
  }

  // =========================
  // MOBILE DROPDOWN
  // =========================
  toggleMobileCourses() {
    this.isMobileCoursesOpen = !this.isMobileCoursesOpen;
  }

  // =========================
  // CLOSE ALL MENUS
  // =========================
  closeAllMenus() {
    this.isMenuOpen = false;
    this.isCoursesDropdownOpen = false;
    this.isMobileCoursesOpen = false;

    this.unlockScroll();
  }

  // =========================
  // OUTSIDE CLICK (DESKTOP ONLY)
  // =========================
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;

    if (
      this.coursesMenu &&
      !this.coursesMenu.nativeElement.contains(target)
    ) {
      this.isCoursesDropdownOpen = false;
    }
  }
}