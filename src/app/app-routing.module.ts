import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { AdminCatalogComponent } from './admin-catalog/admin-catalog.component';

const routes: Routes = [
  {
    path :"login", component : LoginAppComponent
  },
  {
    path : "" , redirectTo : "/login",  pathMatch : 'full'
  },
  {
    path : "admin" , component: AdminCatalogComponent , children : [
        {
          path :"home", component : HomeComponentComponent
        },
        {
          path :"products", component : ProductsComponent
        },
        {
          path: "NewProduct", component : NewProductComponent
        },
        {
          path : "EditProduct/:id", component : EditProductComponent
        }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
