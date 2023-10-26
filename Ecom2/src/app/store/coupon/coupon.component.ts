import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent {

  isDiscount:boolean = false;
  isDiscountApplied :boolean=true;

  constructor(public cart:Cart,private toastr:ToastrService) { }

  
  giveDiscount() {
      
      localStorage.setItem('isDiscountApplied',this.isDiscountApplied.toString());
      this.isDiscount=true;
      // this.toastr.info('10% discount','Coupon Saved',{
      //   timeOut:700});
  }
  checkValue(){
         if(!this.isDiscount)
         {
          localStorage.setItem('isDiscountApplied','false');
          this.toastr.error('you will not able to apply coupon discount','Coupon not Saved',{
            timeOut:700});
         }
  }
}
