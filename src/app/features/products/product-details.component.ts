import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product: any;
  @Output() close = new EventEmitter<void>();

  onClose() { this.close.emit(); }

  addToCart() { console.log('Add to cart', this.product); }
  buyNow() { console.log('Buy now', this.product); }
}
