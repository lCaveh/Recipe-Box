import { Component, Input } from '@angular/core';

@Component({
  selector: 'edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

@Input() recipeToEdit: Recipe;


}
