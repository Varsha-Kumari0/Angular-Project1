import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'description of recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Potato', 10)
      ]
    ),
    new Recipe(
      'Big Burger',
      'description of another recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyy3PvgPPoPyhiv3DH4jrOrxlhq_8bLXwHJ-ZuJ1QQ&s',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Potato', 2)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
