import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCenterPageRoutingModule } from './add-center-routing.module';

import { AddCenterPage } from './add-center.page';
import { UploadImgPage } from '../upload-img/upload-img.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCenterPageRoutingModule
  ],
  declarations: [AddCenterPage,UploadImgPage]
})
export class AddCenterPageModule {}
