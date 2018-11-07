import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './pages/help/help.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { WishlistComponent } from "./pages/wishlist/wishlist.component";
import { LoginAuthHomeComponent } from './pages/login-auth-home/login-auth-home.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: LoginAuthHomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HelpComponent, CheckoutComponent, HomeComponent, WishlistComponent, LoginAuthHomeComponent]