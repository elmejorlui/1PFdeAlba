import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-alumnnos',
  templateUrl: './abm-alumnnos.component.html',
  styleUrls: ['./abm-alumnnos.component.scss']
})
export class AbmAlumnnosComponent {
  nombreControl = new FormControl('', [Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);

  alumnosForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
  });

  constructor(private dialogRef: MatDialogRef<AbmAlumnnosComponent>) { }


  guardar(): void {
    if (this.alumnosForm.valid) {
      this.dialogRef.close(this.alumnosForm.value)
    } else {
      this.alumnosForm.markAllAsTouched();
    }
  }
}
