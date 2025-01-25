import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product = {
    category: 'Bakery Biscuits',
    name: 'Napolitanke Ljesnjak',
    rating: 5,
    reviews: 30,
    currentPrice: 32,
    originalPrice: 35,
    discount: 28,
    code: 'FBB00255',
    availability: 'In Stock',
    type: 'Fruits',
    shipping: '01 day shipping',
    freePickup: true,
    mainImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tdENb6VrzBFjnZegzrG2oX6TGbVDPo.png',
    images: [
      { id: 1, url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tdENb6VrzBFjnZegzrG2oX6TGbVDPo.png', alt: 'Product view 1' },
      { id: 2, url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tdENb6VrzBFjnZegzrG2oX6TGbVDPo.png', alt: 'Product view 2' },
      { id: 3, url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tdENb6VrzBFjnZegzrG2oX6TGbVDPo.png', alt: 'Product view 3' },
      { id: 4, url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tdENb6VrzBFjnZegzrG2oX6TGbVDPo.png', alt: 'Product view 4' },
    ]
  };

  selectedWeight = '250g';
  quantity = 1;
  selectedImage: string;

  weights = [
    { value: '250g', label: '250g' },
    { value: '500g', label: '500g' },
    { value: '1kg', label: '1kg' },
  ];

  constructor() {
    this.selectedImage = this.product.mainImage;
  }

  ngOnInit(): void { }

  setMainImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  addToCart(): void {
    console.log('Added to cart:', {
      product: this.product.name,
      quantity: this.quantity,
      weight: this.selectedWeight
    });
  }

  // -------------- INFORMACION DETALLADA DEL PRODUCTO --------------- \\
  tabs: any[] = [
    { id: 'details', label: 'Product Details', active: true },
    { id: 'information', label: 'Information', active: false },
    { id: 'reviews', label: 'Reviews', active: false },
    { id: 'seller', label: 'Seller Info', active: false }
  ];

  productDetails = {
    nutritionInfo: {
      title: 'Nutrient Value & Benefits',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    storageTips: {
      title: 'Storage Tips',
      content: 'Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    unit: {
      title: 'Unit',
      content: '3 units'
    },
    seller: {
      title: 'Seller',
      content: 'DMart Pvt. LTD'
    },
    disclaimer: {
      title: 'Disclaimer',
      content: 'Image shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed.'
    }
  };

  setActiveTab(selectedTab: any): void {
    this.tabs.forEach(tab => tab.active = tab.id === selectedTab.id);
  }

}
