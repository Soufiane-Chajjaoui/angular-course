import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
    public productForm! : FormGroup;
    constructor(private fb : FormBuilder, private productService : ProductsService){}

    ngOnInit(){
      this.productForm = this.fb.group({
        name : this.fb.control(''  , [Validators.required]),
        price : this.fb.control(''),
        checked : this.fb.control(false),
      });
    }
    saveProduct() {
      let product: Product = this.productForm.value;
      this.productService.addProduct(product)
        .subscribe({
          next  : data => {
            alert(JSON.stringify(data))
          },
          error : err => {
            alert(JSON.stringify(err))
          }
        });
    }
    
}
