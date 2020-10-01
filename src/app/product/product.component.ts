import { Component, EventEmitter, Output, Input } from "@angular/core";
import { Product } from "./model/Product";
@Component({
  selector: "product",
  templateUrl: "product.component.html",
  styleUrls: ["product.component.css"]
})
export class ProductComponent {
  @Output() itemAddedToCartEvent: EventEmitter<Product> = new EventEmitter();

  @Input() product: Product;

  addToCartText = "ADD TO CART";

  addToCart() {
    this.itemAddedToCartEvent.emit(this.product);
  }
}
