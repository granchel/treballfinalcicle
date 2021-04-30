import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LlistaPageRoutingModule } from './llista-routing.module';

import { LlistaPage } from './llista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlistaPageRoutingModule
  ],
  declarations: [LlistaPage]
})
export class LlistaPageModule {}
