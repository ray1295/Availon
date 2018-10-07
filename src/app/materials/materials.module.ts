import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from "@angular/router";
import { MatDialogModule } from '@angular/material/dialog';


import { SidenavComponent } from './sidenav/sidenav.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SlidertextComponent } from './slidertext/slidertext.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule, 
    MatDialogModule
  ],
  declarations: [
    SidenavComponent,
    MenubarComponent,
    NavigationComponent,
    SlidertextComponent,
    RegisterComponent
  ],
  exports: [
    SidenavComponent, 
    MatMenuModule,
    MenubarComponent,
    MatToolbarModule,
    NavigationComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    SlidertextComponent,
    MatDialogModule,
    RegisterComponent
    ]
})
export class MaterialsModule { }
