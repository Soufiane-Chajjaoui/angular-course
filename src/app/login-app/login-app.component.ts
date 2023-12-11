import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent {

    public formGroup!: FormGroup;

    constructor(private fb : FormBuilder ){}
    ngOnInit(){
      this.formGroup = this.fb.group({
        username: this.fb.control('', [Validators.required, Validators.minLength(3)]),
        password: this.fb.control('', [Validators.required, Validators.minLength(8)])
      });
    }

    Loggin() {
      console.log(this.formGroup.value);
      }

}
