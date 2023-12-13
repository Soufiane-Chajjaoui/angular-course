import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    actions : Array<any> = [
      { title : "Home" , route : "/admin/home"},
      { title : "Products" , route : "/admin/products"},
      { title : "New Product" , route : "/admin/NewProduct"}
    ];
    CurrentAction : any ;
    setCurrentAction(action : any) : void{
        this.CurrentAction = action;
      }
}
