import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list.component';
import { PageNotFoundComponent } from './shared/components/page-not-found.component';

export const routes: Routes = [
	{ path: '', component: ProductListComponent },
	{ path: '**', component: PageNotFoundComponent }
];
