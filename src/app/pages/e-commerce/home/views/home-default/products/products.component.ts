import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { EcommerceService } from '../../../../services/ecommerce.service';
import { Router } from '@angular/router';
import { FilterProductDto } from '../../../models/FilterProductDto';
import { AuthorizationService } from '../../../../../shared/global-components/authorization/auth.service';
import { BaseComponents } from '../../../../../shared/BaseComponents';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponents {
  viewMode: 'grid' | 'list' = 'grid';
  itemsPerPage = 50;
  sortBy = 'Featured';
  filterProduct: FilterProductDto = new FilterProductDto();
  list_lineas: any[] = [];
  list_categorias: any[] = [];
  list_products: any[] = [];
  bool_loadinglineas: boolean = false;
  bool_loadingproductos: boolean = false;
  bool_loadingcategories: boolean = false;
  bool_loadingsubcategories: boolean = false;
  constructor(
    private ecommerceService: EcommerceService,
    private router: Router,
    private auth: AuthorizationService,
  ) {
    super();
  }


  ngOnInit() {
    this.load_lineas();
    this.load_products();
  }

  load_lineas() {
    this.bool_loadinglineas = true;
    this.list_lineas = [];
    this.ecommerceService.getAllLineas().subscribe({
      next: (response) => {
        this.bool_loadinglineas = false;
        this.list_lineas = response.data;
      },
      error: (err) => {
        this.bool_loadinglineas = false;
        console.error('Error loading subcategories', err);
      }
    });
  }


  load_categorias() {
    this.bool_loadingcategories = true;
    this.list_categorias = [];
    this.ecommerceService.getAllCategories({ id_linea: this.filterProduct.id_linea }).subscribe({
      next: (response) => {
        this.bool_loadingcategories = false;
        this.list_categorias = response.data;
      },
      error: (err) => {
        this.bool_loadingcategories = false;
        console.error('Error loading subcategories', err);
      }
    });
  }
  select_linea(item: any) {
    this.filterProduct = new FilterProductDto();
    this.filterProduct.id_linea = item.id_linea;
    this.list_subcategorias = [];
    this.load_products();
    this.load_categorias();
  }
  select_categoria(item: any) {
    this.filterProduct = new FilterProductDto();
    this.filterProduct.id_linea = item.id_linea;
    this.filterProduct.id_categoria = item.id_categoria;


    this.load_products();
    this.load_subcategorias();
  }

  select_subcategoria(item: any) {
    this.filterProduct.id_subcategoria = item.id_subcategoria;
    this.load_products();
  }

  list_subcategorias: any[] = [];
  load_subcategorias() {
    this.bool_loadingsubcategories = true;
    this.list_subcategorias = [];
    this.ecommerceService.getAllSubCategories(this.filterProduct).subscribe({
      next: (response) => {
        this.bool_loadingsubcategories = false;
        this.list_subcategorias = response.data;
      },
      error: (err) => {
        this.bool_loadingsubcategories = false;
        console.error('Error loading subcategories', err);
      }
    });
  }

  load_products() {
    this.bool_loadingproductos = true;
    this.list_products = [];
    this.ecommerceService.getAllProducts(this.filterProduct).subscribe({
      next: (response) => {
        this.bool_loadingproductos = false;
        this.list_products = response.data;
      },
      error: (err) => {
        this.bool_loadingproductos = false;
        console.error('Error loading subcategories', err);
      }
    });
  }

  getTitleCategoria(): any {
    if (!this.filterProduct.id_categoria && !this.filterProduct.id_subcategoria) {
      return "Todos los productos"
    }
    if (this.filterProduct.id_categoria && !this.filterProduct.id_subcategoria) {
      return this.list_categorias.find(item => item.id_categoria === this.filterProduct.id_categoria)?.nombre;
    }
    if (this.filterProduct.id_categoria && this.filterProduct.id_subcategoria) {
      return `${this.list_categorias.find(item => item.id_categoria === this.filterProduct.id_categoria)?.nombre} / ${this.list_subcategorias.find(item => item.id_subcategoria === this.filterProduct.id_subcategoria)?.nombre}`;
    }
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
  imagenprueba = 'https://img.freepik.com/vector-gratis/dibujado-mano-senal-foto_23-2149278213.jpg?t=st=1738102911~exp=1738106511~hmac=ddd5b1af063d26bc50a809c1ac2e0efce3b636a0527692fd57f0b8fd3197cefb&w=826'

  buy_product(item) {
    this.auth.setTemporalData(item);
    this.router.navigate(['home/products/info'])

  }
}
