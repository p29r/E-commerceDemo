import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list.component';
import { PageNotFoundComponent } from './shared/components/page-not-found.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  // future: { path: 'products/:id', component: ProductDetailsComponent }
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
