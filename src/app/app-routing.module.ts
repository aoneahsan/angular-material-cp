import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { SignInComponent } from './component/auth/sign-in/sign-in.component';
import { SignUpComponent } from './component/auth/sign-up/sign-up.component';
import { TrainingComponent } from './component/training/training.component';
import { NewTrainingComponent } from './component/training/new-training/new-training.component';
import { CurrentTrainingComponent } from './component/training/current-training/current-training.component';
import { PastTrainingsComponent } from './component/training/past-trainings/past-trainings.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UnAuthGuardService } from './service/auth/unauth-guard-service';
import { AuthGuardService } from './service/auth/auth-guard-service';
import { UserComponent } from './component/user/user.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [UnAuthGuardService]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [UnAuthGuardService]
  },
  {
    path: 'trainings',
    component: TrainingComponent,
    canActivate: [AuthGuardService],
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
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
