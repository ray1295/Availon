import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { RegisterDialogComponent } from './modals/register-dialog/register-dialog.component';
import { RegisterComponent } from "./materials/register/register.component";
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';

import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CheckoutComponent,
    HomeComponent,
    RegisterDialogComponent,
    UserComponent,
    UserListComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    FormsModule, 
    ReactiveFormsModule,
    WishlistComponent,
  ],
  providers: [
    UserService,
    UserListComponent
  ],
  entryComponents: [
    UserComponent,
    RegisterComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
