import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { CouponComponent } from "./coupon/coupon.component";
import { ToastrService } from "ngx-toastr";

@Component({
  templateUrl: "cartDetail.component.html",
  styleUrls: ["cartDetail.component.css"],
})
export class CartDetailComponent {
  couponApplied: boolean = false;
  public discount:number=0;
  public netTotal:number=0;

  constructor(public cart: Cart, public coupon: CouponComponent,private toastr: ToastrService) {}

  applyCoupon(): void {
    if (!this.couponApplied) {
      const isDiscountApplied = localStorage.getItem("isDiscountApplied");
      if (isDiscountApplied === 'true') {
        this.applyDiscount();
        this.couponApplied = true;
      }
      else {
        this.noDiscount();
      }
    }
  }

  applyDiscount() {
    this.discount = this.cart.cartPrice * 0.1;
    this.netTotal = this.cart.cartPrice - this.discount;    
    this.cart.cartPrice = this.cart.cartPrice;
this.toastr.success('10% discount','Coupon Applied')
  }

  noDiscount() {
    alert("Sorry, discount is not available for you.");
  }
}
