import { Component } from '@angular/core';
import { Cliente } from '../../../model/cliente';
import { RegistroService } from '../../../services/registro.service';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuarios-clientes-registrar',
  templateUrl: './usuarios-clientes-registrar.component.html',
  styleUrls: ['./usuarios-clientes-registrar.component.css']
})
export class UsuariosClientesRegistrarComponent {
  cliente: Cliente = {
    id_cliente: 0,
    dni: 99999999,
    nombre_completo: '',
    email: '',
    password: '',
    tipoRegistro: 'correo electronico',
    direccion: '',
    historialReservas: [],
    historialEvaluaciones: []
  };
  registroExitoso = false;
  constructor(private registroService: RegistroService,  private router: Router) { }

  registrarCliente(): void {
    this.registroService.registrarCliente(this.cliente)
      .subscribe(
        response => {
          console.log('Cliente registrado:', response);
          this.registroExitoso = true;
          this.cliente = { // Vaciar los campos del cliente
            id_cliente: 0,
            dni: 99999999,
            nombre_completo: '',
            email: '',
            password: '',
            tipoRegistro: 'correo electronico',
            direccion: '',
            historialReservas: [],
            historialEvaluaciones: []
          };
          setTimeout(() => {
            this.router.navigate(['/home']); // Redirigir al inicio después de 5 segundos
          }, 5000);
        },
        error => {
          console.log('Error al registrar cliente:', error);
        }
      );
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;
  
}