import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('../app/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../app/users-item/users-item.module').then( m => m.UsersItemPageModule)
  },
  {
    path: 'centers',
    loadChildren: () => import('../app/center-items/center-items.module').then( m => m.CenterItemsPageModule)
  },
  {
    path: 'centers/:id',
    loadChildren: () => import('../app/center-item/center-item.module').then( m => m.CenterItemPageModule)
  },
  {
    path: 'centers/edit/:id',
    loadChildren: () => import('../app/add-center/add-center.module').then( m => m.AddCenterPageModule)
  },
  /*
   {
     path: '',
     redirectTo: 'home',
     pathMatch: 'full'
   },
   */
   {
     path: '',
     loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
   },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
