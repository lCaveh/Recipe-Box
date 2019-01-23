import { Component, Input } from '@angular/core';

@Component({
  selector: 'edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  display:boolean=false;
  @Input() recipeToEdit: Recipe;


  editRecipe(){
    this.display= !this.display;

  }
}
