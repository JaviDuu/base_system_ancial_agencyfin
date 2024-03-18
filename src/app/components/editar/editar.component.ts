import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  submitForm() {
    Swal.fire({
      icon: 'success',
      title: 'Cliente editado',
      text: 'La información del cliente se ha editado correctamente.',
      confirmButtonText: 'Aceptar',
    });
  }
}
