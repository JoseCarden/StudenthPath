import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'logup-admin',
    loadChildren: () => import('./logup-admin/logup-admin.module').then( m => m.LogupAdminPageModule)
  },
  {
    path: 'seleccion',
    loadChildren: () => import('./seleccion/seleccion.module').then( m => m.SeleccionPageModule)
  },
  {
    path: 'notas-pon',
    loadChildren: () => import('./notas-pon/notas-pon.module').then( m => m.NotasPonPageModule)
  },
  {
    path: 'deser-anual',
    loadChildren: () => import('./deser-anual/deser-anual.module').then( m => m.DeserAnualPageModule)
  },
  {
    path: 'estudi-anual',
    loadChildren: () => import('./estudi-anual/estudi-anual.module').then( m => m.EstudiAnualPageModule)
  },
  {
    path: 'muestra-total',
    loadChildren: () => import('./muestra-total/muestra-total.module').then( m => m.MuestraTotalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
