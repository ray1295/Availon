import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './pages/help/help.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginAuthHomeComponent } from './pages/login-auth-home/login-auth-home.component';
import { RegisterComponent } from './pages/register/register.component';
import { WishlistComponent } from "./pages/account/pages/wishlist/wishlist.component";
import { AdminComponent } from './pages/admin/admin.component';
import { AddressBookComponent } from './pages/admin/components/address-book/address-book.component';
import { ContactDataComponent } from './pages/admin/components/contact-data/contact-data.component';
import { OrdersComponent } from './pages/admin/components/orders/orders.component';
import { UserListComponent } from './pages/admin/components/user-list/user-list.component';
import { PreferencesComponent } from './pages/admin/components/preferences/preferences.component';
import { ReturnsComponent } from './pages/admin/components/returns/returns.component';
import { VouchersComponent } from './pages/admin/components/vouchers/vouchers.component';
import { OverviewComponent } from './pages/admin/components/overview/overview.component';
import { BusinessProductsComponent } from './pages/admin/components/business-products/business-products.component';
import { UsersComponent } from './pages/admin/components/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: LoginAuthHomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'addresses', component: AddressBookComponent },
      { path: 'contacts', component: ContactDataComponent },
      { path: 'orders', component: OrdersComponent },
      // Delete UserList component after implementing new user component.
      { path: 'user', component: UserListComponent },

      { path: 'preferences', component: PreferencesComponent },
      { path: 'returns', component: ReturnsComponent },
      { path: 'vouchers', component: VouchersComponent },
      { path: 'products', component: BusinessProductsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'overview', component: OverviewComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HelpComponent, CheckoutComponent, HomeComponent, WishlistComponent, LoginAuthHomeComponent, AddressBookComponent, ContactDataComponent, OrdersComponent, UserListComponent, PreferencesComponent, ReturnsComponent, VouchersComponent, OverviewComponent, BusinessProductsComponent,
  UsersComponent]