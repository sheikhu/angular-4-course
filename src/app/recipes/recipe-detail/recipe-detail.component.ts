import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [ShoppingListService]
})
export class  RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.data.subscribe((data: {recipe: Recipe}) => {
        this.recipe = data.recipe;
    });
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }

  onRecipeEdit() {
    this.router.navigate(['edit'], {relativeTo : this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe.name);
    this.router.navigate(['..'], {relativeTo: this.route});
  }
}
