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
import { RegisterDialogComponent } from './modals/register-dialog/register-dialog.component';
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from './components/login/login.component';
import { LoginDialogComponent } from './modals/login-dialog/login-dialog.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NavigationComponent } from "./shared/components/navigation/navigation.component";
import { SlidertextComponent } from "./components/slidertext/slidertext.component";
import { WishlistComponent } from './pages/wishlist/wishlist.component';
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

import { UserService } from './service/user/user.service';
import { MappingService } from './service/google-maps/mapping.service';


@NgModule({
  declarations: [AppComponent, routingComponents, HomeComponent, RegisterDialogComponent, UserComponent, UserListComponent, RegisterComponent, NavigationComponent, SlidertextComponent, WishlistComponent, HandbagComponent, MenCatgComponent, NewinCatComponent, SalesCatgComponent, WomenCatgComponent, BoysCatgComponent, GirlsCatgComponent, ShoesCatgComponent, AccessoriesCatgComponent, SportsCatgComponent, LoginComponent, LoginDialogComponent, SearchNavComponent, FooterComponent, LoginAuthHomeComponent],
  imports: [BrowserModule, AgmCoreModule.forRoot({apiKey: 'AIzaSyA5xED-2pjebyv_OEDp8ZVZIza4jDCoUlw'}), AppRoutingModule, MaterialsModule, HttpClientModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpModule],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [UserService, UserListComponent, MappingService],
  entryComponents: [UserComponent, RegisterComponent, RegisterDialogComponent, LoginDialogComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
