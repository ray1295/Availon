import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

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
import { ShoesCatgComponent } from './shoes-catg/shoes-catg.component';
import { AccessoriesCatgComponent } from './accessories-catg/accessories-catg.component';
import { SportsCatgComponent } from './sports-catg/sports-catg.component';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { FooterComponent } from './footer/footer.component';

import { UserService } from './service/user/user.service';
import { LoginAuthHomeComponent } from './login-auth-home/login-auth-home.component';



@NgModule({
  declarations: [AppComponent, routingComponents, HomeComponent, RegisterDialogComponent, UserComponent, UserListComponent, RegisterComponent, NavigationComponent, SlidertextComponent, WishlistComponent, HandbagComponent, MenCatgComponent, NewinCatComponent, SalesCatgComponent, WomenCatgComponent, BoysCatgComponent, GirlsCatgComponent, ShoesCatgComponent, AccessoriesCatgComponent, SportsCatgComponent, LoginComponent, LoginDialogComponent, SearchNavComponent, FooterComponent, LoginAuthHomeComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialsModule, HttpClientModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpModule],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [UserService, UserListComponent],
  entryComponents: [UserComponent, RegisterComponent, RegisterDialogComponent, LoginDialogComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
