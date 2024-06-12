import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeserAnualPageRoutingModule } from './deser-anual-routing.module';

import { DeserAnualPage } from './deser-anual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeserAnualPageRoutingModule
  ],
  declarations: [DeserAnualPage]
})
export class DeserAnualPageModule {}
