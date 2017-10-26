import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  editMode: boolean;
  recipeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {

    this.route.params.subscribe(( params: Params ) => {
      this.recipe = this.recipeService.getRecipe(params[ 'name' ]);
      this.editMode = params['name'] != null;
      this.initForm();
    });

  }
  initForm() {
    let recipeData = {
      'ingredients': []
    };

    if (this.editMode) {
      recipeData = {...recipeData, ... {
        'name': this.recipe.name,
        'description': this.recipe.description,
        'imagePath': this.recipe.imagePath,
        'ingredients': this.recipe.ingredients
      }};

      if (this.recipe.ingredients) {
        recipeData['ingredients'] = this.recipe.ingredients.map((i: Ingredient) => {
          return this.fb.group({
            name: [i.name, [Validators.required]],
            amount: [i.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]]
          });
        });
      }
    }

    this.recipeForm = this.fb.group({
      'name': [recipeData['name'], [Validators.required]],
      'imagePath': [recipeData['imagePath'], [Validators.required]] ,
      'description': [recipeData['description'], [Validators.required]],
      'ingredients': this.fb.array(recipeData['ingredients'])
    });
  }

  addIngredient() {
    this.ingredients.push(this.fb.group({
      name: [ '', [ Validators.required] ],
      amount: [ '', [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ] ]
    }));
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients,
    );
    console.log(this.recipeForm.value.ingredients);

    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipe.name, newRecipe);
      this.router.navigate(['../..', newRecipe.name], {relativeTo: this.route});

    } else {
      this.recipeService.addRecipe(newRecipe);
      this.router.navigate(['..', newRecipe.name], {relativeTo: this.route});
    }
  }

  onDeleteIngredient(i) {
    console.log((<FormArray>this.recipeForm.get('ingredients')).controls);
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
    // console.log(this.recipeForm);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
