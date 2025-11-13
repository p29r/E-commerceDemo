export class CartService {
  private items: any[] = [];

  add(item: any) {
    this.items.push(item);
  }

  getItems(): any[] {
    return this.items;
  }
}
