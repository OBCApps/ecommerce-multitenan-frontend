import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  viewMode: 'grid' | 'list' = 'grid';
  itemsPerPage = 50;
  sortBy = 'Featured';

  categories = [
    'Dairy, Bread & Eggs',
    'Snacks & Munchies',
    'Fruits & Vegetables',
    'Cold Drinks & Juices',
    'Breakfast & Instant Food',
    'Bakery & Biscuits',
    'Chicken, Meat & Fish'
  ];

  stores = [
    { name: 'E-Grocery', checked: true },
    { name: 'DealShare', checked: false },
    { name: 'DMart', checked: false },
    { name: 'Blinkit', checked: false },
    { name: 'BigBasket', checked: false },
    { name: 'StoreFront', checked: false },
    { name: 'Spencers', checked: false }
  ];

  products: any[] = [
    {
      id: 1,
      name: "Haldiram's Sev Bhujia",
      category: 'Snack & Munchies',
      price: 18,
      originalPrice: 24,
      rating: 4.5,
      reviews: 149,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rpaekdV9IJN9XVbuy4cHil67phqb7Y.png',
      isOnSale: true
    },
    // Añade más productos aquí
  ];

  ngOnInit() {
    // Inicializar datos
  }

  toggleView(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  updateItemsPerPage(value: number) {
    this.itemsPerPage = value;
  }

  updateSort(value: string) {
    this.sortBy = value;
  }
}
