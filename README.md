# E-commerceDemo
E-commerceDemo with primeNg
🔍 Top Free APIs for E-commerce-Style Projects
API	Description	Example Endpoints
🛍️ DummyJSON	Realistic fake data — products, carts, users, auth	https://dummyjson.com/products, /auth/login, /carts
🧴 Escuelajs API	More modern — supports products, categories, and users	https://api.escuelajs.co/api/v1/products
💄 Open Makeup API	Beauty product catalog (real brand data)	https://makeup-api.herokuapp.com/api/v1/products.json

Let’s pick the Escuelajs API — it’s modern, structured, and perfect for Angular projects.
👉 Base URL: https://api.escuelajs.co/api/v1

💡 Project Idea: ShopEase — Angular Online Store
🎯 Goal

A modern e-commerce UI for browsing products, viewing details, adding items to a cart, and simulating login/logout.

🧱 Angular Topics Covered
Feature	Angular Concept
Product listing + search	Components, *ngFor, Pipes
Product details	Routing, route parameters
Cart page	Component interaction, services
Auth (login/logout)	Guards, localStorage, Interceptors
Categories filter	Async pipe, API integration
Loader & Error handling	RxJS, HttpInterceptor
Bonus	NgRx (state management for cart)
🌐 Escuelajs API Reference
Function	Endpoint	Method
Get all products	/products	GET
Get single product	/products/{id}	GET
Get all categories	/categories	GET
Get products by category	/categories/{id}/products	GET
Create new user	/users/	POST
Login	/auth/login	POST
Get profile (after login)	/auth/profile	GET
🧭 Wireframe Overview
🏠 Home Page (Product List)
------------------------------------------------------
| ShopEase | [Search Box] | [Cart Icon] | [Login]   |
------------------------------------------------------
| Categories: All | Clothes | Shoes | Electronics  |
------------------------------------------------------
| [Image] Product 1 - $45   [View Details] [Add 🛒] |
| [Image] Product 2 - $22   [View Details] [Add 🛒] |
| [Image] Product 3 - $15   [View Details] [Add 🛒] |
------------------------------------------------------

📄 Product Details Page
------------------------------------------------------
| < Back | Product Name                              |
------------------------------------------------------
| [Image Gallery]                                   |
| Description: ...                                  |
| Category: ...  Price: $...                         |
| [Add to Cart]  [Buy Now]                           |
------------------------------------------------------

🛒 Cart Page
------------------------------------------------------
| [Product Image] | Name | Qty | Price | Remove ❌  |
------------------------------------------------------
| Total: $XXX                                      |
| [Proceed to Checkout]                            |
------------------------------------------------------

🔐 Login Page
-------------------------
| Email: [         ]    |
| Password: [      ]    |
| [ Login Button ]      |
-------------------------

🧩 Folder Structure
src/
 ├── app/
 │   ├── core/
 │   │   ├── services/
 │   │   │   ├── product.service.ts
 │   │   │   ├── auth.service.ts
 │   │   │   └── cart.service.ts
 │   │   ├── guards/
 │   │   └── interceptors/
 │   ├── features/
 │   │   ├── products/
 │   │   ├── cart/
 │   │   ├── auth/
 │   ├── shared/
 │   │   ├── components/
 │   │   ├── pipes/
 │   │   └── directives/
 │   ├── app-routing.module.ts
 │   ├── app.component.ts
 │   └── app.module.ts
 └── assets/

⚙️ Example API Calls
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

🧭 Suggested 4-Week Build Plan
Week	Focus	Output
Week 1	Setup + Routing + Home	Display product list + search
Week 2	Product detail + Category filters	Routing, API params
Week 3	Cart + Auth	LocalStorage, guards, services
Week 4	Styling + Deploy	Responsive UI + Deployment
