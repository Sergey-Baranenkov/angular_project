import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartPageComponent} from "./cart-page/cart-page.component";
import {ShoppingPageComponent} from "./shopping-page/shopping-page.component";

const routes: Routes = [
  {path: '', component: ShoppingPageComponent},
  {path: 'cart', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
