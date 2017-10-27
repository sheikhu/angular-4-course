import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  endpoint = 'https://sheikhu-recipes.firebaseio.com/sheikhu-recipes.json';


  constructor(private recipeService: RecipeService, private http: Http){}

  pushData(): Observable<any> {
    return this.http.put(this.endpoint, this.recipeService.getRecipes())
      .map( (response: Response) => response.json());
  }

  fetchData(): Observable<Recipe[]> {
    return this.http.get(this.endpoint)
      .map((response: Response) => {
        return response.json();
      });
  }
}
