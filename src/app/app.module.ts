import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundStubComponent } from './not-found-stub/not-found-stub.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    IngredientListComponent,
    ShoppingPageComponent,
    CartPageComponent,
    NotFoundStubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
