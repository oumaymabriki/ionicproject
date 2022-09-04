import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import {Crop} from '@ionic-native/crop/ngx';

import { UploadImgPageRoutingModule } from './upload-img-routing.module';

import { UploadImgPage } from './upload-img.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // File,
    // Camera,
    // ImagePicker,
    // Crop,
    UploadImgPageRoutingModule
  ],
  declarations: [UploadImgPage]
})
export class UploadImgPageModule {}
