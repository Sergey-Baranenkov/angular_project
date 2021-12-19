import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import IIngredient from "../interfaces/IIngredient";
import IIngredientCart from "../interfaces/IIngredientCart";

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {
  private _cart: BehaviorSubject<IIngredientCart[]> = new BehaviorSubject([] as IIngredientCart[]);
  public readonly cart: Observable<IIngredientCart[]> = this._cart.asObservable();

  constructor() {}

  addIngredientIntoCart(ingredient: IIngredient) {
    const cart = [...this._cart.getValue()];
    const existingIngredient = cart.find(el => el.ingredient.name === ingredient.name);
    if (existingIngredient) {
      existingIngredient.count++;
    } else {
      cart.push({ ingredient, count: 1})
    }
    this._cart.next(cart);
  }

  deleteIngredientFromCart(ingredient: IIngredient) {
    let cart = [...this._cart.getValue()];
    const existingIngredient = cart.find(el => el.ingredient.name === ingredient.name);
    if (!existingIngredient) {
      return;
    }

    existingIngredient.count--;

    if (existingIngredient.count === 0) {
        cart = cart.filter(el => el !== existingIngredient);
    }

    this._cart.next(cart);
  }
}
