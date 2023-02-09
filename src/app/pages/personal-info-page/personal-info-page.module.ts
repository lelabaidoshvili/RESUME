import { NgModule } from '@angular/core';
import { PersonalInfoPageRoutingModule } from './personal-info-page-routing.module';
import { PersonalInfoPageComponent } from './personal-info-page.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    PersonalInfoPageComponent
  ],
  imports: [
    SharedModule,
    PersonalInfoPageRoutingModule
  ]
})
export class PersonalInfoPageModule { }
