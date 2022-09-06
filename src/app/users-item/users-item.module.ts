import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersItemPageRoutingModule } from './users-item-routing.module';

import { UsersItemPage } from './users-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersItemPageRoutingModule
  ],
  declarations: [UsersItemPage]
})
export class UsersItemPageModule {}
