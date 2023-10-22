import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Model/Product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getProducts(page : number , pageSize : number)  {
    return this.http.get<Array<Product>>(` http://localhost:8080/products?_page=${page}&_limit=${pageSize}` , { observe : 'response'}) ;
  }
  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`http://localhost:8080/products/${product.id}`, { checked: !product.checked });
  }
  deleteProduct(product : Product) : Observable<Product> {
    return this.http.delete<Product>(`http://localhost:8080/products/${product.id}`) ;
  }
  addProduct(product : Product) : Observable<Product> {
   return this.http.post<Product>(`http://localhost:8080/products`, product ) ;
  }
  searchProduct(query : string) : Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`http://localhost:8080/products?name_like=${query}`) ;
  }
  
}
