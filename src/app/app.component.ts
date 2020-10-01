import { Component } from "@angular/core";
import { Product } from "./product/model/Product";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  showCartConfirmation: boolean = false;

  productList: Product[] = [
    new Product(),
    new Product(),
    new Product(),
    new Product()
  ];

  addToCart(event: Product) {
    console.info("Adding product to cart " + event);
    this.showCartConfirmation = true;
  }

  dismissConfirmation(event: boolean) {
    this.showCartConfirmation = false;
  }
}
