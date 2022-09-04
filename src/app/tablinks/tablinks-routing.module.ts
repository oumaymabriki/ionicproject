import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { IsAuthService } from '../auth/is-auth.service';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: '',
    component: TablinksPage,
    children:[
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('../sign-up/sign-up.module').then( m => m.SignUpPageModule)
      },
      {
        path: 'opt',
        loadChildren: () => import('../opt/opt.module').then( m => m.OptPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'chatroom',
        loadChildren: () => import('../chatroom/chatroom.module').then( m => m.ChatroomPageModule)
      },
      {
        path: 'home-page',
        loadChildren: () => import('../home-page/home-page.module').then( m => m.HomePagePageModule)
      },
      {
        path: 'center-item',
        loadChildren: () => import('../center-item/center-item.module').then( m => m.CenterItemPageModule)
      },
      {
        path: 'center-items',
        loadChildren: () => import('../center-items/center-items.module').then( m => m.CenterItemsPageModule)
      },
      {
        path: 'add-center',
        loadChildren: () => import('../add-center/add-center.module').then( m => m.AddCenterPageModule)
      },
      {
        path: 'update-center',
        loadChildren: () => import('../update-center/update-center.module').then( m => m.UpdateCenterPageModule)
      },
      {
        path: 'add-comment',
        loadChildren: () => import('../add-comment/add-comment.module').then( m => m.AddCommentPageModule)
      },
      {
        path: 'camperprofile',
        loadChildren: () => import('../camperprofile/camperprofile.module').then( m => m.CamperprofilePageModule)
      },
      {
        path: 'adminprofile',
        loadChildren: () => import('../adminprofile/adminprofile.module').then( m => m.AdminprofilePageModule)
      },
      {
        path: 'upload-img',
        loadChildren: () => import('../upload-img/upload-img.module').then( m => m.UploadImgPageModule)
      },
      {
        path: 'edit-profile',
        loadChildren: () => import('../edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
      },
      {
        path: 'edit-password',
        loadChildren: () => import('../edit-password/edit-password.module').then( m => m.EditPasswordPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
