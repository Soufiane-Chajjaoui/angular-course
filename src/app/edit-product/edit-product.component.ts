import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../Model/Product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingAppService } from '../services/loading-app.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{


  public productID? : number  ;
  public product : Product | undefined ;
  productFormGroup! : FormGroup  ;

  constructor(private  activatedRoute : ActivatedRoute ,
     private productService : ProductsService ,
      private fb : FormBuilder ,
      public isloadingService : LoadingAppService){
  }
  ngOnInit(): void {
    this.productID = this.activatedRoute.snapshot.params['id'] ;

    this.productService.ProductByID(this.productID as number).subscribe({
      next : ProductEdit => {
        this.product = ProductEdit ;
        this.productFormGroup = this.fb.group({
          id : this.fb.control(this.product.id) ,
          name : this.fb.control(this.product.name) ,
          price : this.fb.control(this.product.price) ,
          checked : this.fb.control(this.product.checked)
        })
      } , 
      error : Error => {
        console.error(Error) ;
      }
    })
  }
  EditProduct() {
     let prod : Product = this.productFormGroup.value ;
     this.productService.updateProductComplete(prod).subscribe({
      next : data => {
        alert(JSON.stringify(data)) ;
      }
     })
    }
     
}
