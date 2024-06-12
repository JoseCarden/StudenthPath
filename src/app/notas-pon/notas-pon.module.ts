import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasPonPageRoutingModule } from './notas-pon-routing.module';

import { NotasPonPage } from './notas-pon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasPonPageRoutingModule
  ],
  declarations: [NotasPonPage]
})
export class NotasPonPageModule {}
