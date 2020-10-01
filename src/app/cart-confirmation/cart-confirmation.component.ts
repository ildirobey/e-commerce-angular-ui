import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "cart-confirmation",
  templateUrl: "cart-confirmation.component.html",
  styleUrls: ["cart-confirmation.component.css"]
})
export class CartConfirmationComponent {
  @Output() dismissConfirmationEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  message = "1 item Added to Cart";
  continueShopping = "CONTINUE SHOPPING";
  checkoutNow = "CHECKOUT NOW";

  dismiss() {
    this.dismissConfirmationEvent.emit(true);
  }
}
