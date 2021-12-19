import { Component, OnInit } from '@angular/core';
import {CartStoreService} from "../cart-store.service";
import IIngredientCart from "../../interfaces/IIngredientCart";
import IIngredient from "../../interfaces/IIngredient";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public cart: IIngredientCart[] = [];
  constructor(private cartStore: CartStoreService) { }

  ngOnInit(): void {
    this.cartStore.cart.subscribe(cart => this.cart = cart);
  }

  onAdd(ingredient: IIngredient): void {
    this.cartStore.addIngredientIntoCart(ingredient);
  }

  onDelete(ingredient: IIngredient): void {
    this.cartStore.deleteIngredientFromCart(ingredient);
  }
}
