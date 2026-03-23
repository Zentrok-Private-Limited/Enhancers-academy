import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {
showSearch = false;

toggleSearch() {
  this.showSearch = !this.showSearch;
}
  blogs = [
    {
      id: 1,
      title: "Top 10 Study Tips",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      description: "Improve your learning..."
    },
    {
      id: 2,
      title: "Career Options After 12th",
      category: "Career",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      description: "Explore best careers..."
    },
    {
      id: 3,
      title: "Time Management",
      category: "Tips",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      description: "Manage your time..."
    }
  ];

  filteredBlogs: any[] = [];
  searchText = "";
  selectedCategory = "All";

  // ✅ IMPORTANT
  ngOnInit() {
    this.filteredBlogs = [...this.blogs];
  }

  // SEARCH
  onSearch() {
    this.filterBlogs();
  }

  // CATEGORY
  filterCategory(category: string) {
    this.selectedCategory = category;
    this.filterBlogs();
  }

  // MAIN FILTER
  filterBlogs() {
    this.filteredBlogs = this.blogs.filter(blog => {
      const matchCategory =
        this.selectedCategory === "All" ||
        blog.category === this.selectedCategory;

      const matchSearch =
        blog.title.toLowerCase().includes(this.searchText.toLowerCase());

      return matchCategory && matchSearch;
    });
  }
}