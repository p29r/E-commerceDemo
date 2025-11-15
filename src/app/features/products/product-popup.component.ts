import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-popup',
  standalone: true,
  imports: [CommonModule, NgIf, DialogModule, ButtonModule],
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css']
})
export class ProductPopupComponent {
  @Input() visible = false;
  @Input() product: any = null;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() addToCart = new EventEmitter<any>();
  @Output() buyNow = new EventEmitter<any>();

  onHide() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  onAdd() { this.addToCart.emit(this.product); }
  onBuy() { this.buyNow.emit(this.product); }
}
