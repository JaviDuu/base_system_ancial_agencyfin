import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
})
export class AltaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  submitForm() {
    Swal.fire({
      title: 'Cliente creado!',
      text: 'El cliente se ha registrado exitosamente.',
      icon: 'success',
      confirmButtonText: 'Continuar',
    });
  }
}
