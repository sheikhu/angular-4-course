import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingForm') shoppingForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor( private shoppingListService: ShoppingListService ) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(( name ) => {
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(name);
        this.shoppingForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      });
  }

  onSaveItem( shoppingForm: NgForm ) {
    const value = shoppingForm.value;
    if (!this.editMode) {
      this.shoppingListService.addIngredient(
        new Ingredient(value.name, value.amount)
      );
    } else {
      this.shoppingListService.updateIngredient(this.editedItem.name, new Ingredient(value.name, value.amount));
    }
    this.clear();
  }

  clear(): void {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItem.name);
    this.clear();
  }
}
