import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class DataStorageService {
  RECIPES = 'recipes';

  constructor(private recipeService: RecipeService,
    private http: Http,
    private authService: AuthService,
    private db: AngularFireDatabase
  ) { }

  pushData(): Observable<any> {
    return Observable.fromPromise(
      this.db.database.ref(this.RECIPES).set(this.recipeService.getRecipes())
    );

  }

  fetchData(): Observable<Recipe[]> {
    const observable = this.db.list(this.RECIPES).valueChanges()
      .do((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      })
      .map((recipes: Recipe[]) => {
        return recipes;
      });

    return observable;
  }

}
