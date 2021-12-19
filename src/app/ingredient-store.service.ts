import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import IIngredient from "../interfaces/IIngredient";

@Injectable({
  providedIn: 'root'
})
export class IngredientStoreService {
  private _ingredients: BehaviorSubject<IIngredient[]> = new BehaviorSubject([] as IIngredient[]);
  public readonly ingredients: Observable<IIngredient[]> = this._ingredients.asObservable();

  constructor() {}

  updateCurrentIngredients(currentIngredients: IIngredient[]) {
    this._ingredients.next(currentIngredients);
  }
}
