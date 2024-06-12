import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudiAnualPageRoutingModule } from './estudi-anual-routing.module';

import { EstudiAnualPage } from './estudi-anual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudiAnualPageRoutingModule
  ],
  declarations: [EstudiAnualPage]
})
export class EstudiAnualPageModule {}
