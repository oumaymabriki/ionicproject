import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPage } from './sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage,
    children:[
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'opt',
        loadChildren: () => import('../opt/opt.module').then( m => m.OptPageModule)
      },
      {
        path: 'camperprofile',
        loadChildren: () => import('../camperprofile/camperprofile.module').then( m => m.CamperprofilePageModule)
      },
      {
        path: 'adminprofile',
        loadChildren: () => import('../adminprofile/adminprofile.module').then( m => m.AdminprofilePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPageRoutingModule {}
