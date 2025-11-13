import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Product {
  id: number;
  title?: string;
  name?: string;
  images?: string[];
  price: number;
  description?: string;
  image?: string;
  category?: any;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map(items => items.map(i => ({
        ...i,
        name: i.name || i.title,
        image: i.image || (Array.isArray(i.images) && i.images.length ? i.images[0] : undefined)
      } as Product))),
      catchError((err) => {
        console.error('Failed to load products', err);
        return throwError(() => err);
      })
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(
      map(p => ({
        ...p,
        name: p.name || p.title,
        image: p.image || (Array.isArray(p.images) && p.images.length ? p.images[0] : undefined)
      } as Product)),
      catchError((err) => {
        console.error('Failed to load product', err);
        return throwError(() => err);
      })
    );
  }
}
