import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { EcommerceService } from '../../../../services/ecommerce.service';
import { Router } from '@angular/router';
import { FilterProductDto } from '../../../models/FilterProductDto';
import { AuthorizationService } from '../../../../../shared/global-components/authorization/auth.service';

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
  filterProduct: FilterProductDto = new FilterProductDto();
  list_categorias: any[] = [];
  list_products: any[] = [];
  constructor(
    private ecommerceService: EcommerceService,
    private router: Router,
    private auth: AuthorizationService,
  ) {
    //super();
  }


  ngOnInit() {
    this.load_categorias();
  }



  load_categorias() {
    this.ecommerceService.getAllCategories({ id_linea: '05025dde-e4b6-49d5-a03c-59600174a21b' }).subscribe({
      next: (response) => {
        this.list_categorias = response.data;
      },
      error: (err) => {
        console.error('Error loading subcategories', err);
      }
    });
  }

  list_subcategorias: any[] = [];
  load_subcategorias(item: any) {
    this.filterProduct.id_linea = item.id_linea;
    this.filterProduct.id_categoria = item.id_categoria;

    this.ecommerceService.getAllSubCategories(item).subscribe({
      next: (response) => {
        this.list_subcategorias = response.data;
      },
      error: (err) => {
        console.error('Error loading subcategories', err);
      }
    });
  }

  load_products(item: any) {
    this.filterProduct.id_subcategoria = item.id_subcategoria;

    this.ecommerceService.getAllProducts(this.filterProduct).subscribe({
      next: (response) => {
        this.list_products = response.data;
      },
      error: (err) => {
        console.error('Error loading subcategories', err);
      }
    });
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
  imagenprueba = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rpaekdV9IJN9XVbuy4cHil67phqb7Y.png'

  buy_product(item) {
    this.auth.setTemporalData(item);
    this.router.navigate(['home/products/info'])

  }
}
