import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { PilotoRoutingModule } from './piloto-routing.module';
import { PilotoComponent } from './piloto.component';

@NgModule({
  imports: [SharedModule, PilotoRoutingModule, CommonModule, NgxPaginationModule],
  declarations: [PilotoComponent],
  exports: [PilotoComponent]
})
export class PilotoModule { }
