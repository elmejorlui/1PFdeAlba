import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AbmAlumnnosComponent } from './abm-alumnnos/abm-alumnnos.component';

export interface Estudiante{
  id: number;
  nombre: string;
  apellido: string;
  curso: string;
  fecha_registro: Date;
}

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  displayedColumns: string[] = ['id', 'nombre', 'curso', 'fecha_registro'];

  estudiantes: Estudiante[] = [
    {
      id: 1,
      nombre: 'Pedro',
      apellido: 'Perez',
      curso: 'Angular',
      fecha_registro: new Date,
    },
    {
      id: 2,
      nombre: 'Pablo',
      apellido: 'Perez',
      curso: 'Angular',
      fecha_registro: new Date,
    },
    {
      id: 3,
      nombre: 'Juan',
      apellido: 'Perez',
      curso: 'Angular',
      fecha_registro: new Date,
    },
    {
      id: 4,
      nombre: 'Felipe',
      apellido: 'Perez',
      curso: 'Angular',
      fecha_registro: new Date,
    }
  ];

  dataSource = new MatTableDataSource(this.estudiantes);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private matDialog: MatDialog) {}

  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnnosComponent)
    dialog.afterClosed().subscribe((valor: Estudiante) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
            fecha_registro: new Date(),
            id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }
}
