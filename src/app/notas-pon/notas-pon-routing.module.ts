import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasPonPage } from './notas-pon.page';

const routes: Routes = [
  {
    path: '',
    component: NotasPonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasPonPageRoutingModule {}
