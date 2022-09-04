import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenterItemsPageRoutingModule } from './center-items-routing.module';

import { CenterItemsPage } from './center-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CenterItemsPageRoutingModule
  ],
  declarations: [CenterItemsPage]
})
export class CenterItemsPageModule {}
