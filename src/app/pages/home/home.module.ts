import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SharedModule, HomeRoutingModule, CommonModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
