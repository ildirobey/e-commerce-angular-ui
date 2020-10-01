import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { CartConfirmationComponent } from "./cart-confirmation/cart-confirmation.component";

@NgModule({
  declarations: [AppComponent, ProductComponent, CartConfirmationComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
