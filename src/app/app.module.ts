import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from './module/material-module/material-module';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './component/auth/sign-up/sign-up.component';
import { SignInComponent } from './component/auth/sign-in/sign-in.component';
import { TrainingComponent } from './component/training/training.component';
import { CurrentTrainingComponent } from './component/training/current-training/current-training.component';
import { NewTrainingComponent } from './component/training/new-training/new-training.component';
import { PastTrainingsComponent } from './component/training/past-trainings/past-trainings.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/navigation/header/header.component';
import { SideBarComponent } from './component/navigation/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    HomeComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
