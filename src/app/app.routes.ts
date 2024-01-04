import { Route } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const appRoutes: Route[] = [
    {
        path: '', 
        pathMatch: 'full',
        component: HelloWorldComponent
    },
    {
        path: 'products',
        // eslint-disable-next-line @nx/enforce-module-boundaries
        loadComponent: () => import('@ecommerce/products').then( c => c.ProductsComponent)
    }
];
