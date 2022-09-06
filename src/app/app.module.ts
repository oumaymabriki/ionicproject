import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { environment } from 'src/environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CamperprofilePage } from './camperprofile/camperprofile.page';

// const config: SocketIoConfig = {
// 	url: environment.apiUrl, // socket server url;
// 	options: {
// 		transports: ['websocket']
// 	}
// };

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    File,
    Camera,
    ImagePicker,
    Crop,
    HttpClient,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
