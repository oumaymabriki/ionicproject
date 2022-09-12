import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePagePageRoutingModule } from './home-page-routing.module';

import { HomePagePage } from './home-page.page';
import { CenterItemsPage } from '../center-items/center-items.page';
import { CenterItemPage } from '../center-item/center-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePagePageRoutingModule,
  ],
  declarations: [HomePagePage, CenterItemPage]
})
export class HomePagePageModule {}
