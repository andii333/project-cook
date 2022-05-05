import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DishComponent } from './main/dish/dish.component';
import { DishesComponent } from './dishes/dishes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ContaktComponent } from './contakt/contakt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAnalytics } from "firebase/analytics";
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DishComponent,
    DishesComponent,
    AddRecipeComponent,
    ContaktComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    [provideFirebaseApp(() => initializeApp({})),
    provideFirestore(() => getFirestore())],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
