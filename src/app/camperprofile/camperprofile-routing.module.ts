import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamperprofilePage } from './camperprofile.page';

const routes: Routes = [
  {
    path: '',
    component: CamperprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamperprofilePageRoutingModule {}
