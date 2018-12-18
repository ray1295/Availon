import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MaterialsModule } from './shared/modules/materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LoginDialogComponent } from './shared/modals/login-dialog/login-dialog.component';
import { UserComponent } from './pages/user/user.component';
import { UserListComponent } from './pages/admin/components/user-list/user-list.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { SlidertextComponent } from './components/slidertext/slidertext.component';
import { WishlistComponent } from './pages/account/pages/wishlist/wishlist.component';
import { HandbagComponent } from './components/handbag/handbag.component';
import { MenCatgComponent } from './shared/components/navigation/categories/men-catg/men-catg.component';
import { NewinCatComponent } from './shared/components/navigation/categories/newin-cat/newin-cat.component';
import { SalesCatgComponent } from './shared/components/navigation/categories/sales-catg/sales-catg.component';
import { WomenCatgComponent } from './shared/components/navigation/categories/women-catg/women-catg.component';
import { BoysCatgComponent } from './shared/components/navigation/categories/boys-catg/boys-catg.component';
import { GirlsCatgComponent } from './shared/components/navigation/categories/girls-catg/girls-catg.component';
import { ShoesCatgComponent } from './shared/components/navigation/categories/shoes-catg/shoes-catg.component';
import { AccessoriesCatgComponent } from './shared/components/navigation/categories/accessories-catg/accessories-catg.component';
import { SportsCatgComponent } from './shared/components/navigation/categories/sports-catg/sports-catg.component';
import { SearchNavComponent } from './components/search-nav/search-nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginAuthHomeComponent } from './pages/login-auth-home/login-auth-home.component';
import { AccountComponent } from './pages/account/account.component';
import { SettingsComponent } from './pages/account/pages/settings/settings.component';
import { OrdersComponent } from './pages/account/pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CartsComponent } from './pages/carts/carts.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { ProductListComponent } from './pages/products/product-detail/product-list/product-list.component';
import { ProductItemComponent } from './pages/products/product-detail/product-list/product-item/product-item.component';
import { ShoppingListComponent } from './shared/components/shopping-list/shopping-list.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ReturnsComponent } from './pages/admin/components/returns/returns.component';
import { ContactDataComponent } from './pages/admin/components/contact-data/contact-data.component';
import { AddressBookComponent } from './pages/admin/components/address-book/address-book.component';
import { VouchersComponent } from './pages/admin/components/vouchers/vouchers.component';
import { PreferencesComponent } from './pages/admin/components/preferences/preferences.component';
import { OverviewComponent } from './pages/admin/components/overview/overview.component';
import { BusinessProductsComponent } from './pages/admin/components/business-products/business-products.component';
import { BusinessProductsListComponent } from './pages/admin/components/business-products/business-products-list/business-products-list.component';
import { BusinessProductsDetailComponent } from './pages/admin/components/business-products/business-products-detail/business-products-detail.component';
import { BusinessProductsItemComponent } from './pages/admin/components/business-products/business-products-list/business-products-item/business-products-item.component';
import { UsersComponent } from './pages/admin/components/users/users.component';

import { UserService } from './shared/services/user/user.service';
import { MappingService } from './shared/services/google-maps/mapping.service';
import { ProductsService } from './shared/services/products/products.service';

import { GooglePlacesDirective } from './shared/directives/google-places/google-places.directive';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    UserComponent,
    UserListComponent,
    RegisterComponent,
    NavigationComponent,
    SlidertextComponent,
    WishlistComponent,
    HandbagComponent,
    MenCatgComponent,
    NewinCatComponent,
    SalesCatgComponent,
    WomenCatgComponent,
    BoysCatgComponent,
    GirlsCatgComponent,
    ShoesCatgComponent,
    AccessoriesCatgComponent,
    SportsCatgComponent,
    LoginComponent,
    LoginDialogComponent,
    SearchNavComponent,
    FooterComponent,
    LoginAuthHomeComponent,
    AccountComponent,
    SettingsComponent,
    OrdersComponent,
    ProductsComponent,
    PaymentsComponent,
    CustomersComponent,
    CartsComponent,
    GooglePlacesDirective,
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    ShoppingListComponent,
    AdminComponent,
    ReturnsComponent,
    ContactDataComponent,
    AddressBookComponent,
    VouchersComponent,
    PreferencesComponent,
    OverviewComponent,
    BusinessProductsComponent,
    BusinessProductsListComponent,
    BusinessProductsDetailComponent,
    BusinessProductsItemComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyA5xED-2pjebyv_OEDp8ZVZIza4jDCoUlw', libraries: ['places'] }),
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    UserListComponent,
    MappingService,
    ProductsService
  ],
  entryComponents: [
    UserComponent,
    RegisterComponent,
    LoginDialogComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
