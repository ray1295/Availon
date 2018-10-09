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
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NavigationComponent } from "./navigation/navigation.component";
import { SlidertextComponent } from "./slidertext/slidertext.component";
import { WishlistComponent } from './wishlist/wishlist.component';
import { HandbagComponent } from './handbag/handbag.component';

import { UserService } from './service/user.service';
import { MenCatgComponent } from './men-catg/men-catg.component';

@NgModule({
  declarations: [AppComponent, routingComponents, HomeComponent, RegisterDialogComponent, UserComponent, UserListComponent, RegisterComponent, NavigationComponent, SlidertextComponent, WishlistComponent, HandbagComponent, MenCatgComponent ],
  imports: [BrowserModule, AppRoutingModule, MaterialsModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [UserService, UserListComponent],
  entryComponents: [UserComponent, RegisterComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
