import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from '../../shared/data-storage.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseError } from 'firebase';
import { NotificationsService } from 'angular2-notifications/dist';
import {
  trigger,
  state,
  style,
  animate,
  transition, useAnimation
} from '@angular/animations';
import { fadeIn } from 'ng-animate/lib';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ]
})
export class RecipeListComponent implements OnInit, OnDestroy {
  fadeIn: any;
  recipes: Recipe[] ;
  recipesAsync: Observable<Recipe[]> ;
  recipesSubscription: Subscription;
  private subscribtion: Subscription;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private dataStorage: DataStorageService,
              private notifications: NotificationsService
              ) { }

  ngOnInit() {
    this.subscribtion = this.recipeService.recipesChanges.subscribe(
      (newRecipes: Recipe[]) => {
        this.recipes = newRecipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
    this.recipesSubscription = this.dataStorage.fetchData()
      .subscribe((data: Recipe[]) => {
          this.recipes = data;
      },
        (error: FirebaseError) => {
          if (error.code === 'PERMISSION_DENIED') {
            this.notifications.error('Error', 'Please sign in !');
            this.router.navigate(['login']);
          }
        }
        );
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
    this.recipesSubscription.unsubscribe();
  }

}
