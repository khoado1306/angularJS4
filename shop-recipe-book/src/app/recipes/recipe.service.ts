import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    /**
     *
     */
    constructor(private shoppingListService: ShoppingListService) {
               
    }
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
        'This is simply a test',
        'https://get.pxhere.com/photo/restaurant-dish-meal-food-vegetable-recipe-meat-cuisine-asian-food-garnish-dinner-tasty-vegetarian-food-gastronomy-mediterranean-food-fried-food-animal-source-foods-middle-eastern-food-adana-kebab-mixed-grill-fat-ny-ros-1376098.jpg',
    [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
    ]),
        new Recipe('Another Test Recipe',
        'This is simply an another test',
        'https://www.kingsford.com/wp-content/uploads/2014/11/kfd-howtohamburger-Burgers_5_0391-1024x621.jpg',
    [
        new Ingredient('Buns', 2),
        new Ingredient('Beef', 1)
    ])
      ];
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}