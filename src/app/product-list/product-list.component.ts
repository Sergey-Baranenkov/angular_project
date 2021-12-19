import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import IProduct from "../../interfaces/IProduct";
import {IngredientStoreService} from "../ingredient-store.service";
import {ProductStoreService} from "../product-store.service";
import {CartStoreService} from "../cart-store.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Array<IProduct> = []
  constructor(private productStore: ProductStoreService, private ingredientStore: IngredientStoreService, private cartStore: CartStoreService) {}

  ngOnInit(): void {
    this.productStore.products.subscribe(products => this.products = products);
  }

  onClick(product: IProduct) {
    this.ingredientStore.updateCurrentIngredients(product.ingredients);
  }

  onAdd(product: IProduct) {
    for (const ingredient of product.ingredients) {
      this.cartStore.addIngredientIntoCart(ingredient);
    }
  }
}
