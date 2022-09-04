import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCenterPageRoutingModule } from './update-center-routing.module';

import { UpdateCenterPage } from './update-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCenterPageRoutingModule
  ],
  declarations: [UpdateCenterPage]
})
export class UpdateCenterPageModule {}
