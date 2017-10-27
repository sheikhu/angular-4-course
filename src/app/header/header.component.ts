import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  brand = 'Recipe book';
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSave() {
    this.dataStorageService.pushData()
      .subscribe((response) => {
        alert('success');
      });
  }

  onFetch() {
    this.dataStorageService.fetchData()
      .subscribe((recipes: Recipe[]) => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
