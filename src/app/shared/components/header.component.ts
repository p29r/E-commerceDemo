import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule, InputTextModule, BadgeModule, AvatarModule, FormsModule],
  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount = 3; // placeholder, wire to cart service later
  userName = 'Guest';

  categories: any[] = [];
  productsByCategory: any[] = [];
  selectedCategory: any = null;
  selectedProduct: any = null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (cats) => this.categories = cats,
      error: (err) => console.error('Failed to load categories', err)
    });
  }

  onCategoryChange() {
    this.selectedProduct = null;
    if (!this.selectedCategory) { this.productsByCategory = []; return; }
    this.categoryService.getProductsByCategory(this.selectedCategory.id).subscribe({
      next: (items) => {
        // normalize name/title
        this.productsByCategory = items.map((i: any) => ({ ...i, name: i.name || i.title }));
      },
      error: (err) => console.error('Failed to load products for category', err)
    });
  }
}
