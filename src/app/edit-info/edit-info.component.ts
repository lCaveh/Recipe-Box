import { Component, Input } from '@angular/core';
import { Recipe } from '.././models/recipe.model';

@Component({
  selector: 'edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent {
  display:boolean=false;

  @Input() recipeToEdit: Recipe;


  editRecipe(){
    this.display= !this.display;

  }
  setRecipe(){


  }
}
