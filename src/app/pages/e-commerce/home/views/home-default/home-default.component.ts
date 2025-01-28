import { Component } from '@angular/core';
import { OfertsComponent } from "./oferts/oferts.component";
import { CategoriesComponent } from "./categories/categories.component";
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-default',
  standalone: true,
  imports: [OfertsComponent, CategoriesComponent, NgFor, RouterLink],
  templateUrl: './home-default.component.html',
  styleUrl: './home-default.component.scss'
})
export class HomeDefaultComponent {
  featuredProducts = [
    { id: 1, name: "Smartphone X", price: 999, image: "assets/smartphone.jpg" },
    { id: 2, name: "Laptop Pro", price: 1499, image: "assets/laptop.jpg" },
    { id: 3, name: "Wireless Earbuds", price: 199, image: "assets/earbuds.jpg" },
    { id: 4, name: "Smart Watch", price: 299, image: "assets/smartwatch.jpg" },
  ]
}
