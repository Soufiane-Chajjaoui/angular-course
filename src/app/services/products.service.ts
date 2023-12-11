import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Model/Product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private host : string = "http://localhost:8080" ;
  
  constructor(private http : HttpClient) { }

  getProducts(page : number , pageSize : number)  {
    return this.http.get<Array<Product>>(` ${this.host}/products?_page=${page}&_limit=${pageSize}` , { observe : 'response'}) ;
  }
  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.host}/products/${product.id}`, { checked: !product.checked });
  }
  updateProductComplete(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.host}/products/${product.id}`, product);
  }
  deleteProduct(product : Product) : Observable<Product> {
    return this.http.delete<Product>(`${this.host}/products/${product.id}`) ;
  }
  addProduct(product : Product) : Observable<Product> {
   return this.http.post<Product>(`${this.host}/products`, product ) ;
  }
  searchProduct(query : string) : Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.host}/products?name_like=${query}`) ;
  }


  ProductByID(id : number)  : Observable<Product> {
    return this.http.get<Product>(`${this.host}/products/${id}`) ;
  }

  
}
