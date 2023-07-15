import { Component } from '@angular/core';

@Component({
  selector: 'app-input-busqueda',
  templateUrl: './input-busqueda.component.html',
  styleUrls: ['./input-busqueda.component.css']
})
export class InputBusquedaComponent {
  nombreLimpiador: string = '';

  limpiarNombreLimpiador() {
    this.nombreLimpiador = '';
  }

}
