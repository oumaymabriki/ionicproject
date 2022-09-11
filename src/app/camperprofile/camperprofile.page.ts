import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
//import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-camperprofile',
  templateUrl: './camperprofile.page.html',
  styleUrls: ['./camperprofile.page.scss'],
})
export class CamperprofilePage implements OnInit {

  back: boolean;
  data: '';
  constructor(public router: Router,
    //private httpClient: HttpClient,
    //private service: AuthService,
   // private storage: Storage,
    private toastController: ToastController
    ) { }

  ngOnInit() {
    const data = this.router.url.split('/');
    console.log(data);
    // eslint-disable-next-line eqeqeq
    if(data[1] == 'home') {this.back = true;}
    else {this.back = false;}
  }

  loadInfo() {}
  logout() {}
  
// loadInfo(){
// this.service.getInfo().subscribe( res =>{
//   // eslint-disable-next-line @typescript-eslint/dot-notation
//   this.data = res['msg'];
// });
// }
// logout(){
// this.service.logout();
// };
// clearToken(){
// this.storage.remove('accesToken');
// const toast = this.toastController.create({
//   message: 'jwt removed',
//   duration: 3000,
// });
// // eslint-disable-next-line @typescript-eslint/no-shadow
// toast.then(toast =>toast.present());
// };
}
