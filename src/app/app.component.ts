import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedRecipe: Recipe;
  recipes: Recipe[] = [
    new Recipe('Simple White Cake',['1 cup white sugar','1/2 cup butte','2 eggs','2 teaspoons vanilla extract','1 1/2 cups all-purpose flour','1 3/4 teaspoons baking powder','1/2 cup milk'],`Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x9 inch pan or line a muffin pan with paper liners.
In a medium bowl, cream together the sugar and butter. Beat in the eggs, one at a time, then stir in the vanilla. Combine flour and baking powder, add to the creamed mixture and mix well. Finally stir in the milk until batter is smooth. Pour or spoon batter into the prepared pan.
Bake for 30 to 40 minutes in the preheated oven. For cupcakes, bake 20 to 25 minutes. Cake is done when it springs back to the touch.`,'./assets/img/apple_crumble_pie.jpg'),
    new Recipe('Apple Crumble Pie',['1 (9 inch) deep dish pie crust','5 cups apples - peeled, cored and thinly sliced','1/2 cup white sugar','3/4 teaspoon ground cinnamon','1/3 cup white sugar','1/3 cup white sugar','3/4 cup all-purpose flour','6 tablespoons butter'],`Preheat oven to 400 degrees F (200 degrees C.)
Arrange apple slices in unbaked pie shell. Mix 1/2 cup sugar and cinnamon; sprinkle over apples.
Mix 1/3 cup sugar with flour; cut in butter until crumbly. Spoon mixture over apples.
Bake in preheated oven until apples are soft and top is lightly browned, about 40 minutes.`,'./assets/img/simple_white_cake.jpg')
  ];
}
