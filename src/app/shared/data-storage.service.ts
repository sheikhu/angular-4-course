import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  endpoint = 'https://sheikhu-recipes.firebaseio.com/sheikhu-recipes.json';


  constructor(private recipeService: RecipeService,
              private http: Http,
              private authService: AuthService
              ) {}

  pushData(): Observable<any> {
    const token = this.authService.getToken();
    return this.http.put(this.endpoint, this.recipeService.getRecipes(),
      {params: {auth: token}})
      .map( (response: Response) => response.json());
  }

  fetchData(): Observable<Recipe[]> {
    const token = this.authService.getToken();
    return this.http.get(this.endpoint, {params: {auth: token}})
      .map((response: Response) => {
        return response.json();
      });
  }
}
