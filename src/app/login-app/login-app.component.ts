import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent {

    public formGroup!: FormGroup;

    constructor(private fb : FormBuilder , private router : Router ){}
    ngOnInit(){
      this.formGroup = this.fb.group({
        username: this.fb.control('', [Validators.required, Validators.minLength(3)]),
        password: this.fb.control('', [Validators.required, Validators.minLength(4)])
      });
    }

    Loggin() {
      console.log(this.formGroup.value);
      if (this.formGroup.value.username === "admin" && this.formGroup.value.password === "admin") {
        this.router.navigateByUrl(`/admin/home`);
      }

      }

}
