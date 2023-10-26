import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
import { CouponComponent } from "./store/coupon/coupon.component";
import { ItemDescriptionComponent } from "./store/item-description/item-description.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    StoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "store",
        component: StoreComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "cart",
        component: CartDetailComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "checkout",
        component: CheckoutComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path:"coupon",
         component:CouponComponent,
         canActivate:[StoreFirstGuard],
      },
      {
        path:"itemDescription",
        component:ItemDescriptionComponent,
        canActivate:[StoreFirstGuard],
      },
      {
        path:"itemDescription/:id",
        component:ItemDescriptionComponent,
        canActivate:[StoreFirstGuard],
      },
      { path: "**", redirectTo: "/coupon" },
    ]),
  ],
  providers: [StoreFirstGuard,CouponComponent,StoreComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
