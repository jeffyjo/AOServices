import { Recipe } from './Recipe.model';
import { RecipeService } from './Recipe.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  recipes : Recipe[];
  recipeNumber : number = 0;

  constructor(private rs: RecipeService){
    this.recipes = rs.getRecipes();
    console.log(this.recipes)
  }

  numberPressed(recipeNumber: number){
    this.recipeNumber = recipeNumber;
  }

  deletedPressed(){
    this.rs.deleteRecipe(this.recipeNumber)
  }

  savePressed(){
    this.rs.saveRecipe(this.recipeNumber, this.recipes[this.recipeNumber])
  }
}
