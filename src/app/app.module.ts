import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppInterceptorInterceptor } from './services/app-interceptor.interceptor';
import { LoginAppComponent } from './login-app/login-app.component';
import { AdminCatalogComponent } from './admin-catalog/admin-catalog.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ProductsComponent,
    NewProductComponent,
    EditProductComponent,
    DashboardComponent,
    NavbarComponent,
    LoginAppComponent,
    AdminCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
