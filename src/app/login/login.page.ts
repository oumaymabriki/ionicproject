import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { FormResponse } from '../models/form-response';
import { LoginForm } from '../models/login';
import { AuthService } from '../services/auth.service';
//import { AuthService } from '../auth/auth.service';
//import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers:[]
})
export class LoginPage implements OnInit {
  [x: string]: any;

  form: FormGroup;
  type = true;
  data='';
  loginForm = new LoginForm();
  fResponse = new FormResponse();

  constructor( private router: Router, private authservice: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)]
      }),
    });
  }

  changeType() {
    this.type = !this.type;
  }
//   onSubmit() {
//     this.service.login(this.form.value).subscribe();
//    }


//   forgotPassword() {
//     console.log('forgot');
//   };
// logout(){
//   this.service.logout();
// }
// clearToken(){
//   this.storage.remove('accesToken');
// }
 async signIn() {
     if(!this.form.valid) {
       this.form.markAllAsTouched();
       return;
     }
     console.log(this.form.value);
     //this.service.login(this.form.value).subscribe();
     await this.authservice.authenticate(this.loginForm).toPromise()
     .then(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', res.fullName);
        localStorage.setItem('isAdmin', res.isAdmin.toString());
        localStorage.setItem('id', res._id);
        this.fResponse.setMessage('Authenticated succeed.');
        if(!res.isAdmin) this.router.navigate(['camperprofile']);
        else this.router.navigate(['adminprofile']);
        //this.router.navigate(['/']);
     })
     .catch(err => {
      this.fResponse.setError(err.error)
      alert('Authentication failed')
     });
   }
}
