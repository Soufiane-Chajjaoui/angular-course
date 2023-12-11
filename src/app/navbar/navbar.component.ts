import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    actions : Array<any> = [
      { title : "Home" , route : "/home"},
      { title : "Products" , route : "/products"},
      { title : "New Product" , route : "/NewProduct"}
    ];
    CurrentAction : any ;
    setCurrentAction(action : any) : void{
        this.CurrentAction = action;
      }
}
