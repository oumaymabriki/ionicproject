import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.page.html',
  styleUrls: ['./opt.page.scss'],
})
export class OptPage implements OnInit {


  @Input() phoneNumber;
  isLoading = false;
  otp: string;

  config = {
    length: 6,
    allowNumbersOnly: true,
    inputClass: 'otp-input-style'
  };
  input: any;
    constructor(
      public modalCtrl: ModalController,
      public loadingCtrl: LoadingController,
      public toastCtrl: ToastController,
      ) { }

  ngOnInit() {}
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    setTimeout(() => {
      this.input.setFocus();
      console.log('enter');
    }, 500);
   }

   showLoader(msg) {
    if(!this.isLoading) {this.isLoading = true;}
    return this.loadingCtrl.create({
      message: msg,
      spinner: 'bubbles'
    }).then(res => {
      res.present().then(() => {
        if(!this.isLoading) {
          res.dismiss().then(() => {
            console.log('abort presenting');
          });
        }
      });
    })
    .catch(e => {
      this.isLoading = false;
      console.log(e);
    });
  }

  hideLoader() {
    if(this.isLoading) {this.isLoading = false;}
    return this.loadingCtrl.dismiss()
    .then(() => console.log('dismissed'))
    .catch(e => console.log(e));
  }

  onOtpChange(event) {
    this.otp = event;
    console.log(this.otp);
  }

  async resend() {
    try {
      //const response = await this.auth.signInWithPhoneNumber('+91' + this.phone);
     // console.log(response);
     console.log('resend code');
    } catch(e) {
      console.log(e);
    }
  }

  async verifyOtp() {
    try {
    //  const response = await this.auth.verifyOtp(this.otp);
     // console.log(response);
    console.log(this.otp);
    } catch(e) {
      console.log(e);
    }
  }

}
