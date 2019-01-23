import { Component, Input } from '@angular/core';
import { Recipe } from '.././models/recipe.model';


@Component({
  selector: 'recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent {
  display: boolean = false;


  @Input() recipe: Recipe;

  showRecipe(){
    this.display = !this.display;
}
}
