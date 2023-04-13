import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { TituloDirective } from './directives/titulo.directive';
import { PipesModule } from './pipes/pipes.modules';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    NombreCompletoPipe,
    TituloDirective
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
  ],
  exports: [
    NombreCompletoPipe,
    TituloDirective
  ],
})

export class AlumnosModule { }