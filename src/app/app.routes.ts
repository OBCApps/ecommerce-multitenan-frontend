import { Routes } from '@angular/router';
import { HomeDefaultComponent } from './pages/e-commerce/home/views/home-default/home-default.component';
import { ProductsComponent } from './pages/e-commerce/home/views/home-default/products/products.component';
import { ProductDetailComponent } from './pages/e-commerce/home/views/home-default/product-detail/product-detail.component';
import { NavbarComponent } from './pages/e-commerce/home/views/home-default/navbar/navbar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: NavbarComponent,
        children: [
            {
                path: '', component: HomeDefaultComponent,
            },
            {
                path: 'products', component: ProductsComponent,
            },
            {
                path: 'products/info/:name_route', component: ProductDetailComponent,
            },
        ]
    }
];
