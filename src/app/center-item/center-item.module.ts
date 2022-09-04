import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenterItemPageRoutingModule } from './center-item-routing.module';

import { CenterItemPage } from './center-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CenterItemPageRoutingModule
  ],
  declarations: [CenterItemPage]
})
export class CenterItemPageModule {}
