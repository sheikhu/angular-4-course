import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeResolver } from './recipe-resolver.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { AuthGuard } from '../auth/auth-guard.service';


const recipesRoutes = [
  { path: '', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':name', component: RecipeDetailComponent, resolve: {recipe: RecipeResolver} },
    { path: ':name/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
  ]},
];
@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard, RecipeResolver]
})
export class RecipesRoutingModule {}
