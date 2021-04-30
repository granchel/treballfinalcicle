import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LlistaPage } from './llista.page';

const routes: Routes = [
  {
    path: '',
    component: LlistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LlistaPageRoutingModule {}
