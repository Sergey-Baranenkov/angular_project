import {Component, Input, OnInit} from '@angular/core';
import IIngredient from "../../interfaces/IIngredient";
import {IngredientStoreService} from "../ingredient-store.service";
import {CartStoreService} from "../cart-store.service";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  public ingredients: IIngredient[] = [];
  constructor(private ingredientStore: IngredientStoreService, private cartStore: CartStoreService) { }

  ngOnInit(): void {
    this.ingredientStore.ingredients.subscribe(ingredients => this.ingredients = ingredients);
  }

  onAdd(ingredient: IIngredient) {
    this.cartStore.addIngredientIntoCart(ingredient);
  }
}
