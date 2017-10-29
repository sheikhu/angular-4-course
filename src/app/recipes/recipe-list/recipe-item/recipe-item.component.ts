import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  animations: [
    trigger('itemState', [
      state('shown', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0.5
      })),
      transition('shown <=> hidden', animate('200ms ease-in')),
    ])
  ]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() current: Recipe;
  state = 'shown';
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSelect(selectedRecipe: Recipe) {
    this.recipeService.recipeSelected.next(selectedRecipe);
  }
}
