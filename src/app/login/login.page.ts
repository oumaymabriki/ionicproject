import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
//import { AuthService } from '../auth/auth.service';
import { Storage } from '@ionic/storage';
import { AuthConstants } from './../config/auth-constants';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ToastService } from '../services/toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers:[]
})
export class LoginPage implements OnInit {

  form: FormGroup;
  type = true;
  postData = {
    email: '',
    password: ''
  };

  constructor(  private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService) { }

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
validateInputs() {
  console.log(this.postData);
  const email = this.postData.email.trim();
  const password = this.postData.password.trim();
  return (
    this.postData.email &&
    this.postData.password &&
    email.length > 0 &&
    password.length > 0
  );
}
 signIn() {
  if (this.validateInputs()) {
    this.authService.login(this.postData).subscribe(
      (res: any) => {
        if (res.userData) {
          // Storing the User data.
          this.storageService
            .store(AuthConstants.AUTH, res.userData)
            // eslint-disable-next-line @typescript-eslint/no-shadow
            .then(res => {
              this.router.navigate(['camperprofile']);
            });
        } else {
          this.toastService.presentToast('Incorrect email and password.');
        }
      },
      (error: any) => {
        this.toastService.presentToast('Network Issue.');
      }
    );
  } else {
    this.toastService.presentToast(
      'Please enter email/username or password.'
    );
  }
}
}
