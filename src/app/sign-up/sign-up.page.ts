
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { FormResponse } from '../models/form-response';
import { User } from '../models/user';
// import { AuthService } from '../auth/auth.service';
import { OptPage } from '../opt/opt.page';
import { UsersService } from '../services/users.service';
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

  user: User = new User();
  fResponse = new FormResponse();



  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
  signUp(){

      this.userService.register(this.user).toPromise()
      .then(res => {
        this.fResponse.setMessage('User added succesfully.');
        localStorage.setItem('token', res.toString());
        if(this.user.role === 'camper'){
        this.router.navigate(['/camperprofile']);
        }
        else{ this.router.navigate(['/adminprofile']); }
      })
      .catch(err => {
        console.log(err);
        this.fResponse.setError(err.error.error);
      });
    }

}



