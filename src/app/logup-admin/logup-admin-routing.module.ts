import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogupAdminPage } from './logup-admin.page';

const routes: Routes = [
  {
    path: '',
    component: LogupAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogupAdminPageRoutingModule {}
