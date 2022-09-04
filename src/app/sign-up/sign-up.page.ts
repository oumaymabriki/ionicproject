import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constants';
// import { AuthService } from '../auth/auth.service';
import { OptPage } from '../opt/opt.page';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ToastService } from '../services/toast.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  providers:[]
})
export class SignUpPage implements OnInit {

  form: FormGroup;
  type = true;
  verified = false;
  verifiedNumber: any;

  postData = {
    fullName: '',
    phoneNumber: '',
    email: '',
    password: ''
  };
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private storageService: StorageService,
    private router: Router,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)]
      }),
    });
  }
  validateInputs() {
    const fullName = this.postData.fullName.trim();
    const password = this.postData.password.trim();
    const email = this.postData.email.trim();
    const phoneNumber = this.postData.phoneNumber.trim();
    return (
      this.postData.fullName &&
      this.postData.phoneNumber &&
      this.postData.password &&
      this.postData.email &&
      email.length > 0 &&
      fullName.length > 0 &&
      phoneNumber.length > 0 &&
      password.length > 0
    );
  }
  changeType() {
    this.type = !this.type;
  }

  // onSubmit() {
  //  this.service.register(this.form.value).subscribe();
  // }
  // signUp(){
  //   this.service.register(this.form.value).subscribe();
  //   }

  async verifyViaOtp(): Promise<void> {
    console.log('otp', this.form.value.phone);
    const phoneNumber = this.form.value.phone;
    // eslint-disable-next-line eqeqeq
    if(phoneNumber && phoneNumber?.length == 10) {
      const options: any = {
        component: OptPage
      };
      const modal = await this.modalCtrl.create(options);
      await modal.present();
      const { data } = await modal.onWillDismiss();
      if(data) {
        // work on it
        console.log('otp: ', data);
        this.verified = true;
        this.verifiedNumber = phoneNumber;
      }
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Please enter proper Phone Number',
        duration: 5000,
        color: 'danger'
      });
      toast.present();
    }
  }

  changeNumber(event) {
    const phoneNumber = this.form.value.phone;
    // eslint-disable-next-line eqeqeq
    if(phoneNumber && phoneNumber?.length == 10) {
      // eslint-disable-next-line eqeqeq
      if(this.verifiedNumber && phoneNumber == this.verifiedNumber) {
        this.verified = true;
      } else {
        this.verified = false;
      }
    }
  }
  signUp() {
    if (this.validateInputs()) {
      this.authService.signup(this.postData).subscribe(
        (res: any) => {
          if (res.userData) {
            // Storing the User data.
            this.storageService
              .store(AuthConstants.AUTH, res.userData)
              // eslint-disable-next-line @typescript-eslint/no-shadow
              .then(res => {
                this.router.navigate(['login']);
              });
          } else {
            this.toastService.presentToast(
              'Data alreay exists, please enter new details.'
            );
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast(
        'Please enter name, email, username or password.'
      );
    }
  }
}



