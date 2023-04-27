import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

const routes: Routes = [
  {
    path:'home',
    component: MenuComponent,
    children: [
      {
        path: 'estudiantes',
        component: AlumnosComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo:  'home'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }