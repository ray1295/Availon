import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterDialogComponent } from './modals/register-dialog/register-dialog.component';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from './login/login.component';
import { LoginDialogComponent } from './modals/login-dialog/login-dialog.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NavigationComponent } from "./navigation/navigation.component";
import { SlidertextComponent } from "./slidertext/slidertext.component";
import { WishlistComponent } from './wishlist/wishlist.component';
import { HandbagComponent } from './handbag/handbag.component';
import { MenCatgComponent } from './men-catg/men-catg.component';
import { NewinCatComponent } from './newin-cat/newin-cat.component';
import { SalesCatgComponent } from './sales-catg/sales-catg.component';
import { WomenCatgComponent } from './women-catg/women-catg.component';
import { BoysCatgComponent } from './boys-catg/boys-catg.component';
import { GirlsCatgComponent } from './girls-catg/girls-catg.component';
import { CollectionCatgComponent } from './collection-catg/collection-catg.component';
import { ShoesCatgComponent } from './shoes-catg/shoes-catg.component';
import { AccessoriesCatgComponent } from './accessories-catg/accessories-catg.component';
import { InspireCatgComponent } from './inspire-catg/inspire-catg.component';
import { SportsCatgComponent } from './sports-catg/sports-catg.component';
import { BrandsCatgComponent } from './brands-catg/brands-catg.component';
import { PremiumCatgComponent } from './premium-catg/premium-catg.component';

import { UserService } from './service/user.service';


@NgModule({
  declarations: [AppComponent, routingComponents, HomeComponent, RegisterDialogComponent, UserComponent, UserListComponent, RegisterComponent, NavigationComponent, SlidertextComponent, WishlistComponent, HandbagComponent, MenCatgComponent, NewinCatComponent, SalesCatgComponent, WomenCatgComponent, BoysCatgComponent, GirlsCatgComponent, CollectionCatgComponent, ShoesCatgComponent, AccessoriesCatgComponent, InspireCatgComponent, SportsCatgComponent, BrandsCatgComponent, PremiumCatgComponent, LoginComponent, LoginDialogComponent ],
  imports: [BrowserModule, AppRoutingModule, MaterialsModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [UserService, UserListComponent],
  entryComponents: [UserComponent, RegisterComponent, RegisterDialogComponent, LoginDialogComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
