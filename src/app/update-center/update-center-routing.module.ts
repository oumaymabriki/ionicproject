import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCenterPage } from './update-center.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCenterPageRoutingModule {}
