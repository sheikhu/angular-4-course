/**
 * Created by sheikhu on 21/10/17.
 */
import { Recipe } from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];
  recipesChanges = new Subject<Recipe[]>();
  recipeSelected= new Subject<Recipe>();


  constructor(private shoppingListService: ShoppingListService, private http: Http) {}
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(name: string) {
    console.log(this.recipes);
    return this.recipes.find((recipe: Recipe) => {
      return recipe.name === name;
    });

  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  updateRecipe( name: string, recipe: Recipe ) {
    const index = this.recipes.findIndex((i: Recipe) => {
        return i.name === name;
      });
    this.recipes[index] = recipe;
    this.recipesChanges.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe ) {
    this.recipes.push(recipe);
    this.recipesChanges.next(this.recipes.slice());
  }

  deleteRecipe( name: string ) {
    const index = this.recipes.findIndex((i: Recipe) => {
      return i.name === name;
    });
    this.recipes.splice(index, 1);
    this.recipesChanges.next(this.recipes.slice());
  }

  setRecipes( recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanges.next(this.getRecipes());
  }
}
