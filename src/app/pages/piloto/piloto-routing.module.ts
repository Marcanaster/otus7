import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PilotoComponent } from './piloto.component';

const routes: Routes = [
  { path: '', component: PilotoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PilotoRoutingModule { }
