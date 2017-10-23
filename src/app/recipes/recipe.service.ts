/**
 * Created by sheikhu on 21/10/17.
 */
import { Recipe } from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Lasagne',
      'Great for brunches',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Meat', 1) , new Ingredient('Tomatoes', 5)]
    ),
    new Recipe(
      'Bolognaise',
      'Great for diner',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Spaghettis', 1), new Ingredient('Meat', 2), new Ingredient('Tomatoes', 4)]
    )
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(name: string) {
    return this.recipes.find((recipe: Recipe) => {
      return recipe.name === name;
    });

  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
