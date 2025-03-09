import { Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
//import { CarritoComponent } from './components/carrito/carrito.component';

export const routes: Routes = [
    { path: '', component: ProductoComponent },
    //{ path: 'carrito', component: CarritoComponent }
    { path: 'carrito', loadComponent: () => import('./components/carrito/carrito.component').then(m => m.CarritoComponent) }
];
