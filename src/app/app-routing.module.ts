import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'personal-info-page',
    loadChildren: ()=> import('./pages/personal-info-page/personal-info-page.module').then(m => m.PersonalInfoPageModule)
  },
  {
    path: 'experience-page',
    loadChildren: ()=> import('./pages/experience-page/experience-page.module').then(m => m.ExperiencePageModule)
  },
  {
    path: 'education-page',
    loadChildren: ()=> import('./pages/education-page/education-page.module').then(m => m.EducationPageModule)
  },
  {
    path: 'result',
    loadChildren: ()=> import('./pages/result/result.module').then(m => m.ResultModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
