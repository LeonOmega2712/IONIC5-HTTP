import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglePhotoPageRoutingModule } from './single-photo-routing.module';

import { SinglePhotoPage } from './single-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglePhotoPageRoutingModule
  ],
  declarations: [SinglePhotoPage]
})
export class SinglePhotoPageModule {}
