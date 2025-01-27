import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { EcommerceService } from '../../../../services/ecommerce.service';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor, ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  list_categorias: any[] = [];

  constructor(
    private ecommerceService: EcommerceService,
    private router: Router,
  ) {
    //super();
  }

  ngOnInit() {
    this.general_loads();
  }

  general_loads() {

    forkJoin({
      list_categorias: this.ecommerceService.getCategorias(),


    }).subscribe({
      next: (responses) => {
        this.list_categorias = responses.list_categorias.data;


      },
      error: (err) => {

      }
    });
  }

  goToCategorias(item: any) {
    this.router.navigate(['home/products']);
  }
}
