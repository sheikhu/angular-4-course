import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipe.module#RecipesModule'},
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
