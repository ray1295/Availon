import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './help/help.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from "./wishlist/wishlist.component";
import { LoginAuthHomeComponent } from './login-auth-home/login-auth-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: LoginAuthHomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'wishlist', component: WishlistComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HelpComponent, CheckoutComponent, HomeComponent, WishlistComponent]