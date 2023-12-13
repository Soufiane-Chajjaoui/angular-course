import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent {

    public formGroup!: FormGroup;

    constructor(private fb : FormBuilder , private router : Router , private authService : AuthService ){}
    ngOnInit(){
      this.formGroup = this.fb.group({
        username: this.fb.control('', [Validators.required, Validators.minLength(3)]),
        password: this.fb.control('', [Validators.required, Validators.minLength(4)])
      });
    }

    Loggin() {
      console.log(this.formGroup.value.username);
      this.authService.login(this.formGroup.value.username , this.formGroup.value.password)
      .subscribe({
        next : (user : any) => {
            console.log(user[0].password);
           // this.authService.authenticateUser(user);
        },
        error : (err : any) =>{
          console.log(err);
        }
      })
    }
}
