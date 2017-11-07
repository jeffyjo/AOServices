import { Injectable } from '@angular/core';
import { Recipe } from './Recipe.model';

@Injectable()
export class RecipeService {
    private recipes: Recipe[];
    
    constructor(){
        this.recipes = [
            { 
                id: "1",
                name: "Classic Burger",
                description: "Nice classic burger",
                picture: "",
                ingridients: [
                    { id: "1", name: "Bread", amount: 4, unit: "kg" },
                    { id: "2", name: "Beef", amount: 1, unit: "kg" },
                    { id: "3", name: "Ketchup", amount: 1, unit: "TableSpoon"},
                    { id: "4", name: "Cucumber", amount: 1, unit: "piece" }
                ],
                steps: [
                    { id: "1", description: "bake bread"},
                    { id: "2", description: "make beef"},
                    { id: "3", description: "Use ketchup"},
                    { id: "4", description: "Cut cucumber"}
                ],
                tools: {
                    primary: [
                        { id: "1", description: "Breadknife"},
                        { id: "2", description: "Oven"},
                        { id: "3", description: "Plate"}
                    ],
                    secondary: [    
                        { id: "1", description: "bake bread"}
                    ]
                },
                isPublic: false
            },
            { 
                id: "2",
                name: "Fries",
                description: "Nice fries",
                picture: "",
                ingridients: [
                    { id: "1", name: "Patatos", amount: 1, unit: "kg" },
                    { id: "2", name: "Salt", amount: 1, unit: "TeaSpoon" },
                ],
                steps: [
                    { id: "1", description: "Cut Potatoes"},
                    { id: "2", description: "Use salt"},
                    { id: "3", description: "Put in oven"},
                    { id: "4", description: "Enjoy"}
                ],
                tools: {
                    primary: [
                        { id: "1", description: "Knife"},
                        { id: "2", description: "Oven"},
                    ],
                    secondary: [ ]
                },
                isPublic: false
            },
            { 
                id: "3",
                name: "Chili Mayo",
                description: "Nice Mayo",
                picture: "",
                ingridients: [
                    { id: "1", name: "Mayo", amount: 1, unit: "kg" },
                    { id: "2", name: "Chili", amount: 1, unit: "TeaSpoon" },
                ],
                steps: [
                    { id: "1", description: "Cut Chili"},
                    { id: "2", description: "Put chili in Mayo"},
                    { id: "3", description: "Mix"}
                ],
                tools: {
                    primary: [
                        { id: "1", description: "Knife"},
                        { id: "2", description: "bowl"},
                    ],
                    secondary: [ ]
                },
                isPublic: false
            }
        ]
    }

    getRecipes(){
        this.print();
        return this.recipes;
    }

    deleteRecipe(recipe: number){
        this.recipes.splice(recipe, 1);
        this.print();
    }

    saveRecipe(recipeIndex: number, recipe: Recipe ){
        this.recipes[recipeIndex] = recipe;
        this.print();
    }

    print(){
        console.log(this.recipes);
    }

}