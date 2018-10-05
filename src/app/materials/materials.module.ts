import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { SidenavComponent } from './sidenav/sidenav.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [
    SidenavComponent,
    MenubarComponent,
    NavigationComponent
  ],
  exports: [
    SidenavComponent, 
    MatMenuModule,
    MenubarComponent,
    MatToolbarModule,
    NavigationComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialsModule { }
