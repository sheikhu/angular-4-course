
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe | Observable<Recipe> | Promise<Recipe> {
    const name = route.paramMap.get('name');
    const recipe = this.recipeService.getRecipe(name);
    console.log('recipe -> ' + recipe);
    if (recipe) {
      return recipe;
    } else {
      this.router.navigate(['/']);
      return null;
    }
  }
}

