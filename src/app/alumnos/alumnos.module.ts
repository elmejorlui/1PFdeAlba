import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from '../shared/pipes/pipes.modules';
import { DirectivesModule } from '../shared/directives/directives.module';
import { AbmAlumnnosComponent } from './lista-alumnos/abm-alumnnos/abm-alumnnos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AlumnosComponent,
    ListaAlumnosComponent,
    AbmAlumnnosComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    PipesModule,
    DirectivesModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    AlumnosComponent
  ],
})
export class AlumnosModule { }
