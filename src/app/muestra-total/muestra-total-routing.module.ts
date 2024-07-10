import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuestraTotalPage } from './muestra-total.page';

const routes: Routes = [
  {
    path: '',
    component: MuestraTotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuestraTotalPageRoutingModule {}
