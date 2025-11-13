import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Feature components
import { ProductListComponent } from './features/products/product-list.component';
import { ProductDetailsComponent } from './features/products/product-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found.component';

// PrimeNG (light set) - ensure these packages are installed
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule, ButtonModule, InputTextModule,ProductListComponent, ProductDetailsComponent, PageNotFoundComponent, AppComponent],
  bootstrap: []
})
export class AppModule {}
