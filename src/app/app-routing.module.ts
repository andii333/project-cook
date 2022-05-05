import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ContaktComponent } from './contakt/contakt.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishComponent } from './main/dish/dish.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: 'main', component: MainComponent, children: [
      {
        path: ':type', component: DishesComponent, children: [
          { path: ':title', component: DishComponent }]
      }]
  },
  { path: 'addRecipe', component: AddRecipeComponent },
  { path: 'contakt', component: ContaktComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
