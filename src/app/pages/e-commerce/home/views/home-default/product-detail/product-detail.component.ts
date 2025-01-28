import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AuthorizationService } from '../../../../../shared/global-components/authorization/auth.service';
import { DtoFotoProducto, DtoItemMast } from './models/DtoItem';
import { BaseComponents } from '../../../../../shared/BaseComponents';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent extends BaseComponents {
  product: DtoItemMast = new DtoItemMast();

  selectedWeight = '250g';
  quantity = 1;
  selectedImage: DtoFotoProducto = new DtoFotoProducto();

  weights = [
    { value: '250g', label: '250g' },
    { value: '500g', label: '500g' },
    { value: '1kg', label: '1kg' },
  ];

  constructor(
    private auth: AuthorizationService,
  ) {
    super();
  }

  ngOnInit(): void {

    this.product = this.auth.getTemporalData();
    this.selectedImage = this.product.fotos && this.product.fotos.length > 0 && this.product.fotos[0];


  }

  setMainImage(imageUrl: any): void {
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
    const phoneNumber = '926581351'; // Número de WhatsApp (sin el "+" o espacios, formato internacional)
    const mensaje = `Quiero comprar el siguiente producto:\nCantidad: ${this.quantity}\nNombre del producto: ${this.product.nombre}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
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
