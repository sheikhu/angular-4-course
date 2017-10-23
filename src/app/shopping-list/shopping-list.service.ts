import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
/**
 * Created by sheikhu on 21/10/17.
 */
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  ingredientAdded = new Subject<Ingredient[]>();

  constructor() {}

  addIngredient(ingredient: Ingredient, emitEvent = true) {
    const existed = this.ingredients.find((i: Ingredient) => i.name === ingredient.name);
    if (existed) {
      existed.amount += ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
    if (emitEvent) {
      this.ingredientAdded.next(this.getIngredients().slice());
    }
  }

  getIngredients() {
    return this.ingredients;
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient: Ingredient) => {
      this.addIngredient(ingredient, false);
    });
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
