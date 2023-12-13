import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../Model/Product';
import  {Router} from '@angular/router';
import { AppStateService } from '../services/app-state.service';
import { LoadingAppService } from '../services/loading-app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnDestroy{


  constructor(
     private productService : ProductsService ,
     private router : Router ,
     public appState : AppStateService,
     public isloadingService : LoadingAppService
     ){}


  ngOnDestroy(): void {
    this.appState.productState.pageCurrent = 1 ;
  }

  ngOnInit(): void {
     this.getProducts();

  }



  getProducts(page : number = this.appState.productState.pageCurrent) {

    this.appState.productState.status = "LOADING" ;
    this.productService.getProducts(page, this.appState.productState.pageSize)
    .subscribe({
      next : response  => { 
              this.appState.productState.status = "LOADED" ;
              this.appState.productState.products = response.body as Array<Product> ;
              this.appState.productState.totalProducts =parseInt(response.headers.get("X-Total-Count")!)  as number ;
              this.appState.productState.numberpages = Math.floor(this.appState.productState.totalProducts / this.appState.productState.pageSize) ;
              console.log(this.appState.productState.numberpages) ;
            } 
      , error : error => 
                  { 
                    this.appState.productState.status = "Error" ;
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
        this.appState.productState.products =  this.appState.productState.products.filter((p: { id: number; }) => p.id!= product.id);
      }
    })
  }

  searchProduct() : void {
    this.productService.searchProduct(this.appState.productState.keyword)
    .subscribe(data => {
      this.appState.productState.products = data ;
    })
  }

  handleClickPage(page : number) {
    this.appState.productState.pageCurrent = page;
    this.getProducts(page)
  }

  nextPage() : void {
    this.getProducts(this.appState.productState.pageCurrent++);
  }
  PreviousPage() : void {
    this.getProducts(this.appState.productState.pageCurrent--);
  }

  handleEdit(product : Product) : void {
     this.router.navigateByUrl(`/admin/EditProduct/${product.id}`);
    } 

}
