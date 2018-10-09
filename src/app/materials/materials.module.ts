import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from "@angular/router";
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [CommonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, RouterModule, MatDialogModule, MatCardModule, MatExpansionModule, MatButtonModule],
  declarations: [ ],
  exports: [ MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatCardModule, MatExpansionModule, MatButtonModule ]
})
export class MaterialsModule { }
