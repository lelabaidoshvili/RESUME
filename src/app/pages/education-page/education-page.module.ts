import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationPageRoutingModule } from './education-page-routing.module';
import { EducationPageComponent } from './education-page.component';


@NgModule({
  declarations: [
    EducationPageComponent
  ],
  imports: [
    CommonModule,
    EducationPageRoutingModule
  ]
})
export class EducationPageModule { }
