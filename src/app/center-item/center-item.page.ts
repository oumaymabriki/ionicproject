
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

import { Router, NavigationExtras } from '@angular/router';
//loading controller
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-center-item',
  templateUrl: './center-item.page.html',
  styleUrls: ['./center-item.page.scss'],
})
export class CenterItemPage implements OnInit {

  fcmtoken: any= '';
  map: L.Map;
  latitude: any;
  longitude: any;
  private single: any = [];

  constructor(

    public loadingController: LoadingController,
    private router: Router,
    private http: HttpClient,

) {

    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

            if (position) {

                this.map = new L.Map('mapId2').setView([position.coords.latitude, position.coords.longitude], 8);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Developed By : Kinetogroup'
                }).addTo(this.map);

                console.log(position);
            }
        });
      }


    setInterval(() => {

      this.getLocation();
    }, 5000);
   //get single data camping
   this.http.get('http://localhost:8000/FindCenter/10')
   .subscribe((data) => {

       console.log(data);

       this.single = data ;

        //this.content.scrollToBottom();

    });

  }
  ngOnInit(): void {
  }

  /*getToken(){
    this.fcmtoken = localStorage.getItem("token");
    alert(this.fcmtoken);
  }*/

   ionViewDidEnter() {

  }

  leafletMap(lat: any, lng: any) {

    const markPoint = L.marker([lat, lng]);
    markPoint.bindPopup('<p>My Position.</p>');
    this.map.addLayer(markPoint);
  }

  ionViewWillLeave() {
    this.map.remove();
  }


  getLocation() {
    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

            if (position) {

                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;

                this.leafletMap(position.coords.latitude, position.coords.longitude);

                console.log(position);
            }
        });

    }
}


  async  presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Detecting location ...',
      duration: 2000,
    });
    await loading.present();


    // router
    this.router.navigateByUrl('/new-route', {
      }).then(() => {
        this.router.navigate(['/new-route']);
    });
  }

}
