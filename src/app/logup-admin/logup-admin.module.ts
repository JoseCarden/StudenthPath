import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogupAdminPageRoutingModule } from './logup-admin-routing.module';

import { LogupAdminPage } from './logup-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LogupAdminPageRoutingModule
  ],
  declarations: [LogupAdminPage]
})
export class LogupAdminPageModule {}
