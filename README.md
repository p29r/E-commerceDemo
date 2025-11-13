# E-commerceDemo
E-commerceDemo with primeNg

# 🛍️ ShopEase – Angular E-Commerce Application

ShopEase is a modern Angular-based e-commerce web app that lets users browse, search, and view product details, add products to a cart, and simulate login/logout functionality — all using the **Escuelajs API**.

---

## 📚 Project Overview

**Goal:**  
Build a responsive and modular Angular e-commerce application using real product data from a public API.  

**Key Features:**
- 🧭 Browse all products and categories  
- 🔍 Search and filter products  
- 📄 View detailed product information  
- 🛒 Add and remove items from cart  
- 🔐 Simulated login/logout with guards  
- ⚙️ Responsive UI (Material / Tailwind)  

---

## 🚀 Live API Source – Escuelajs

Base URL: [https://api.escuelajs.co/api/v1](https://api.escuelajs.co/api/v1)

| Purpose | Endpoint | Method |
|----------|-----------|--------|
| Get all products | `/products` | GET |
| Get single product | `/products/{id}` | GET |
| Get all categories | `/categories` | GET |
| Get products by category | `/categories/{id}/products` | GET |
| Create new user | `/users/` | POST |
| Login | `/auth/login` | POST |
| Get profile | `/auth/profile` | GET |

---

---

## ⚙️ Angular Topics Covered

| Feature | Angular Concept |
|----------|----------------|
| Product listing + search | Components, *ngFor, Pipes |
| Product details | Routing, route parameters |
| Cart page | Component interaction, services |
| Auth (login/logout) | Guards, localStorage, Interceptors |
| Categories filter | Async pipe, API integration |
| Loader & Error handling | RxJS, HttpInterceptor |
| Bonus (optional) | NgRx (state management for cart) |

---

## 🧭 Wireframe Overview

### 🏠 Home Page


---

## 🧩 Example API Integration

```typescript
// product.service.ts
@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = 'https://api.escuelajs.co/api/v1/products';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getProductsByCategory(id: number): Observable<any[]> {
    return this.http.get<any[]>(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
  }
}


| Week       | Focus                             | Deliverable                    |
| ---------- | --------------------------------- | ------------------------------ |
| **Week 1** | Setup + Routing + Home            | Display product list + search  |
| **Week 2** | Product detail + Category filters | Routing, API params            |
| **Week 3** | Cart + Auth                       | LocalStorage, guards, services |
| **Week 4** | Styling + Deploy                  | Responsive UI + Deployment     |


## 🧱 Folder Structure

