import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { SignInComponent } from './component/auth/sign-in/sign-in.component';
import { SignUpComponent } from './component/auth/sign-up/sign-up.component';
import { TrainingComponent } from './component/training/training.component';
import { NewTrainingComponent } from './component/training/new-training/new-training.component';
import { CurrentTrainingComponent } from './component/training/current-training/current-training.component';
import { PastTrainingsComponent } from './component/training/past-trainings/past-trainings.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'trainings',
    component: TrainingComponent,
    children: [
      {
        path: 'new',
        component: NewTrainingComponent
      },
      {
        path: 'current',
        component: CurrentTrainingComponent
      },
      {
        path: 'past',
        component: PastTrainingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
