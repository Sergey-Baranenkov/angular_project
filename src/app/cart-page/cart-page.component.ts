import { Component, OnInit } from '@angular/core';
import {CartStoreService} from "../cart-store.service";
import IIngredientCart from "../../interfaces/IIngredientCart";
import IIngredient from "../../interfaces/IIngredient";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public cart: IIngredientCart[] = [];
  public customIngredientFormControl = new FormControl('', Validators.required);

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

  onCustomIngredientAdd() {
    if ( this.customIngredientFormControl.invalid ) {
      alert('Ошибка: Пустое название ингредиента');
      return;
    }
    const name = 'Пользовательский ингредиент: ' + this.customIngredientFormControl.value;

    const ingredient: IIngredient = {
      name,
      logo: '❓'
    }

    this.cartStore.addIngredientIntoCart(ingredient);
    this.customIngredientFormControl.setValue('');
  }
}
