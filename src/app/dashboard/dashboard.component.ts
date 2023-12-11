import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    constructor(public appState : AppStateService) {}

    NumberChecked() : number{
      let productChecked = this.appState.productState.products.filter((product : any) => product.checked);
      return productChecked.length ;
    }
}
