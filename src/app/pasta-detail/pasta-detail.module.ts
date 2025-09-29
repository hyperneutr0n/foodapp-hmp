import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastadetailPageRoutingModule } from './pasta-detail-routing.module';

import { PastaDetailPage } from './pasta-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastadetailPageRoutingModule,
  ],
  declarations: [PastaDetailPage],
})
export class PastadetailPageModule {}
