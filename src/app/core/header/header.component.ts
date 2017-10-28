import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import { RecipeService } from '../../recipes/recipe.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  brand = 'Recipe book';
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private authService: AuthService,
    ) { }

  ngOnInit() {
  }

  onSave() {
    this.dataStorageService.pushData()
      .subscribe((response) => {
        console.log(response);
      });
  }

  onFetch() {
    this.dataStorageService.fetchData()
      .subscribe((recipes: Recipe[]) => {
      this.recipeService.setRecipes(recipes);
    });
  }

  get auth() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }
}
