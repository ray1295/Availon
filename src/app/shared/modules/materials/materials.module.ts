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
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  imports: [CommonModule, MatMenuModule, MatSelectModule, MatStepperModule, MatToolbarModule, MatIconModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, RouterModule, MatDialogModule, MatCardModule, MatExpansionModule, MatButtonModule],
  declarations: [ ],
  exports: [ MatMenuModule, MatToolbarModule, MatIconModule, MatSelectModule, MatStepperModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatCheckboxModule, MatCardModule, MatExpansionModule, MatButtonModule, RouterModule ]
})
export class MaterialsModule { }
