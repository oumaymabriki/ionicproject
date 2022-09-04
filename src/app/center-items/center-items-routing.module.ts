import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenterItemsPage } from './center-items.page';

const routes: Routes = [
  {
    path: '',
    component: CenterItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenterItemsPageRoutingModule {}
