import { Component } from '@angular/core';
import { Course, COURSES } from '../../dummyCourses';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses: Course[] = COURSES;
  filteredCourses: Course[] = [];
  searchTerm: string = '';
  sortOrder: string = 'new';
  selectedCategory: string = '';
  currentPage: number = 1;
  perPage: number = 8;
  totalPages: number = 1;

  constructor() {
    this.filterCourses();
  }


  filterCourses() {
    let filtered = [...this.courses];

  
    if (this.searchTerm) {
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }


    if (this.selectedCategory) {
      filtered = filtered.filter((course) => course.category === this.selectedCategory);
    }

    if (this.sortOrder === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (this.sortOrder === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    }


    this.totalPages = Math.ceil(filtered.length / this.perPage);
    const start = (this.currentPage - 1) * this.perPage;
    const end = start + this.perPage;
    this.filteredCourses = filtered.slice(start, end);
  }

  onSearch() {
    this.currentPage = 1;
    this.filterCourses();
  }

  onSort() {
    this.filterCourses();
  }

  onCategoryChange() {
    this.currentPage = 1;
    this.filterCourses();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.filterCourses();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.filterCourses();
    }
  }
  onLogout(){
    
  }
}
