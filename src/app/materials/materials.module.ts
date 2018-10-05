import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


import { SidenavComponent } from './sidenav/sidenav.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
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
    MatIconModule
  ]
})
export class MaterialsModule { }
