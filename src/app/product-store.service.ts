import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import IProduct from "../interfaces/IProduct";

function getMock() {
  return [
    {
      name: 'Яблочный пирог',
      description: 'Очень вкусно',
      ingredients: [
        {name: 'Яблоко', logo: '🍎'},
        {name: 'Тесто', logo: '🥟'},
        {name: 'Сахар', logo: '🍬'}
      ]
    },
    {
      name: 'Натс с хлебом',
      description: 'Для жителей Винницы скидка 15%',
      ingredients: [
        {name: 'Натс', logo: '🥜'},
        {name: 'Хлеб', logo: '🍞'}
      ]
    },
    {
      name: 'Пирог с картошкой',
      description: 'Что может быть вкуснее?',
      ingredients: [
        {name: 'Тесто', logo: '🥟'},
        {name: 'Картошка', logo: '🥔'}
      ]
    }
  ] as IProduct[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {
  private _products: BehaviorSubject<IProduct[]> = new BehaviorSubject([] as IProduct[]);
  public readonly products: Observable<IProduct[]> = this._products.asObservable();
  constructor() {
    this.fetchData();
  }

  fetchData() {
    this._products.next(getMock());
  }
}
