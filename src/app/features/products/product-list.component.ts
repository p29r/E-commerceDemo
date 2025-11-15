import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { ProductDetailsComponent } from './product-details.component';
import { ProductPopupComponent } from './product-popup.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, 
    //ProductDetailsComponent,
     ButtonModule, DialogModule, ProductPopupComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  query = '';
  products: any[] = [];
  filtered: any[] = [];

  selectedProduct: any = null;
  popupVisible = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (items) => {
        // normalize name/title
        this.products = items.map(i => ({ ...i, name: (i.name || i.title) }));
        this.filtered = [...this.products];
      },
      error: (err) => {
        console.error('Error loading products', err);
        this.products = [];
        this.filtered = [];
      }
    });
  }

  filter() {
    const q = this.query.trim().toLowerCase();
    this.filtered = this.products.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }

  openDetails(product: any) {
    // fetch full product data by id and show popup
    const id = product.id || product;
    this.productService.getProductById(Number(id)).subscribe({
      next: (p) => {
        this.selectedProduct = p;
        this.popupVisible = true;
      },
      error: (err) => {
        console.error('Failed to load product details', err);
      }
    });
  }

  addToCart(product: any) {
    // placeholder for cart action
    console.log('Add to cart', product);
  }

  buyNow(product: any) {
    // placeholder for buy action
    console.log('Buy now', product);
  }
}
