import { Component, OnDestroy, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  current: Ingredient;
  private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientAdded.subscribe((newIngredients: Ingredient[]) => {
      this.ingredients = newIngredients;
      console.log(newIngredients);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onEditItem( ingredient: Ingredient ) {
    this.current = ingredient;
    this.shoppingListService.startedEditing.next(ingredient.name);
  }
}
