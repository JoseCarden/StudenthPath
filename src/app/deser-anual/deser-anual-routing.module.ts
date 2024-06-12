import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeserAnualPage } from './deser-anual.page';

const routes: Routes = [
  {
    path: '',
    component: DeserAnualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeserAnualPageRoutingModule {}
