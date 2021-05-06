import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LlistaPageRoutingModule } from './llista-routing.module';

import { LlistaPage } from './llista.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlistaPageRoutingModule,
    PipesModule
  ],
  declarations: [LlistaPage]
})
export class LlistaPageModule {}
