import { Component } from '@angular/core';
import { OfertsComponent } from "./oferts/oferts.component";
import { CategoriesComponent } from "./categories/categories.component";

@Component({
  selector: 'app-home-default',
  standalone: true,
  imports: [OfertsComponent, CategoriesComponent],
  templateUrl: './home-default.component.html',
  styleUrl: './home-default.component.scss'
})
export class HomeDefaultComponent {

}
