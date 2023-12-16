import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent {

    public formGroup!: FormGroup;

    constructor(private fb : FormBuilder , private router : Router , private authService : AuthService , private appState : AppStateService ){}
    ngOnInit(){
      this.formGroup = this.fb.group({
        username: this.fb.control('', [Validators.required, Validators.minLength(3)]),
        password: this.fb.control('', [Validators.required, Validators.minLength(4)])
      });
    }

    Loggin() {
      this.authService.login(this.formGroup.value.username , this.formGroup.value.password)
      .then((user)=>{
        console.log(user.email);
        this.router.navigateByUrl("/admin/products")
      })
      .catch((error)=>{
        console.log(error);
        this.appState.ErrorState.message = error.message;
      });
    }
}
