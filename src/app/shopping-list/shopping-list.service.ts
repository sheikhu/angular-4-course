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
  startedEditing = new Subject<string>();
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
    return this.ingredients.slice();
  }

  getIngredient(name: string) {
    return this.ingredients.find((i: Ingredient) => i.name === name);
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient: Ingredient) => {
      this.addIngredient(ingredient, false);
    });
    this.ingredientAdded.next(this.ingredients.slice());
  }

  updateIngredient( name: string, ingredient: Ingredient ) {
    console.log(name);
    const existed = this.ingredients.find((i: Ingredient) => i.name === name);
    if (existed) {
      existed.name = ingredient.name;
      existed.amount = ingredient.amount;
    }
  }

  deleteIngredient( name: string ) {
    const index = this.ingredients.findIndex((i: Ingredient) => {
      return i.name === name;
    });
  console.log(index);
    if (index !== -1) {
      this.ingredients.splice(index, 1);
    }
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
