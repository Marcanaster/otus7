import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [BreadCrumbComponent],
  imports: [
    CommonModule,
    NgxPaginationModule


  ],
  exports:[
    BreadCrumbComponent
  ]
})
export class SharedModule { }
