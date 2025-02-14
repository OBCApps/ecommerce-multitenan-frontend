import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BaseComponents } from '../../../../../../../shared/BaseComponents';
import { DtoFotoProducto, DtoItemMast } from '../../models/DtoItem';
import { AuthorizationService } from '../../../../../../../shared/global-components/authorization/auth.service';

@Component({
  selector: 'app-item-face_care',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './item-face_care.component.html',
  styleUrl: './item-face_care.component.scss'
})
export class ItemFaceCareComponent extends BaseComponents {
  @Input() product: DtoItemMast = new DtoItemMast();
  ///product: DtoItemMast = new DtoItemMast();

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

    //this.product = this.auth.getTemporalData();
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
    { id: 0, label: 'Especificaciones Principales', active: true },
    { id: 1, label: 'Información Adicional', active: false },
    { id: 2, label: 'Modo de Uso', active: false },
    { id: 3, label: 'Beneficios', active: false },

  ];



  setActiveTab(selectedTab: any): void {
    this.tabs.forEach(tab => tab.active = tab.id === selectedTab.id);
  }
  producta: any = {
    name: "CeraVe Moisturizing Cream",
    image: "/placeholder.svg?height=300&width=300",
    specs: [
      "Para piel seca a muy seca",
      "Fórmula no comedogénica",
      "Con 3 ceramidas esenciales",
      "Liberación prolongada hasta 24 horas",
    ],
    usage: [
      "Aplicar generosamente según sea necesario",
      "Ideal para uso diario en cara y cuerpo",
      "Puede usarse de día y de noche",
    ],
    benefits: [
      "Hidratación intensa y duradera",
      "Restaura la barrera protectora de la piel",
      "Textura no grasa",
      "Apto para pieles sensibles",
    ],
    additionalInfo:
      "Desarrollado con dermatólogos, este producto contiene ácido hialurónico y ceramidas que ayudan a retener la humedad natural de la piel. Su tecnología MVE permite una liberación controlada de ingredientes, proporcionando hidratación durante todo el día.",
  }
}
