import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../Model/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnDestroy{ 
  public keyword! : string;
  public products: Array<Product> = [];
  public pageSize : number = 4 ;
  public pageCurrent : number = 1 ;
  public numberpages! : number ;
  public totalProducts! : number ;
  constructor(private productService : ProductsService){}


  ngOnDestroy(): void {
    this.pageCurrent = 1 ;
  }

  ngOnInit(): void {
     this.getProducts();

  }



  getProducts(page : number = this.pageCurrent) {
    this.productService.getProducts(page, this.pageSize)
    .subscribe({
      next : response  => { 
              this.products = response.body as Array<Product> ;
              this.totalProducts =parseInt(response.headers.get("X-Total-Count")!)  as number ;
              this.numberpages = Math.floor(this.totalProducts / this.pageSize) ;
              console.log(this.numberpages) ;
            } 
      , error : error => 
                  { 
                    console.log(error)
                  }
    });
  }

  handleChecked(product : Product): void {
      this.productService.updateProduct(product)
      .subscribe({
        next: _updateProduct =>{
          product.checked =!product.checked
        }}
      )
  }


  handleDeleteProduct(product : Product) {
    this.productService.deleteProduct(product)
    .subscribe({
      next : deletedProduct  => {
        console.log(`Product ${deletedProduct.name} (ID: ${deletedProduct.id}) has been deleted`);
        this.products =  this.products.filter(p => p.id!= product.id);
      }
    })
  }

  searchProduct() : void {
    this.productService.searchProduct(this.keyword)
    .subscribe(data => {
      this.products = data ;
    })
  }

  handleClickPage(page : number) {
    this.pageCurrent = page;
    this.getProducts(page)
  }

  nextPage() : void {
    this.getProducts(this.pageCurrent++);
  }
  PreviousPage() : void {
    this.getProducts(this.pageCurrent--);

  }

}
