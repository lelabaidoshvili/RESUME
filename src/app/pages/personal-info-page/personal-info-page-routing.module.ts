import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalInfoPageComponent} from "./personal-info-page.component";

const routes: Routes = [
  {
    path: '',
    component: PersonalInfoPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalInfoPageRoutingModule { }
