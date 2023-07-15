import { Component } from '@angular/core';
import { LimpiadorService } from 'src/app/services/limpiador.service';
import { Limpiador } from 'src/app/model/limpiador';
import { CriterioBusqueda } from 'src/app/model/criterio-busqueda';

@Component({
  selector: 'app-limpiadores',
  templateUrl: './limpiadores.component.html',
  styleUrls: ['./limpiadores.component.css']
})
export class LimpiadoresComponent {

  limpiadores: Limpiador[] = [];
  filtros: CriterioBusqueda = {};
  columnas: string[] = ['nombre_completo', 'edad', 'email', 'num_servicios', 'telefono', 'descripcion', 'calificacion'];
  nombreLimpiador: string = '';
  calificacionMin: number | undefined;
  calificacionMax: number | undefined;
  numServiciosMin: number | undefined;
  numServiciosMax: number | undefined;
  edadMin: number | undefined;
  edadMax: number | undefined;

  constructor(
    private limpiadorService: LimpiadorService
  ){}

  ngOnInit(){
    this.getAllLimpiadores();
  }

  getAllLimpiadores() {
    this.limpiadorService.getLimpiadores({}).subscribe(
      (data: Limpiador[]) => {
        this.limpiadores = data;
      },
      (error) => {
        console.log('Error al obtener los limpiadores', error);
      }
    );
  }
  
  aplicarFiltros() {
    console.log('Aplicar filtros');
    console.log(this.filtros); // Verifica que los filtros se estén capturando correctamente
    console.log('Nombre del limpiador:', this.filtros.nombre);
    this.limpiadorService.getLimpiadores(this.filtros).subscribe(
      (data: Limpiador[]) => {
        this.limpiadores = data;
        console.log('Resultados de búsqueda:', data); // Verifica los resultados de la búsqueda
      },
      (error) => {
        console.log('Error al realizar la búsqueda', error);
      }
    );
  }

  aplicacionFiltros() {
    const criterio: CriterioBusqueda = {
      nombre: this.nombreLimpiador,
      calificacionMin: this.calificacionMin,
      calificacionMax: this.calificacionMax,
      numServiciosMin: this.numServiciosMin,
      numServiciosMax: this.numServiciosMax,
      edadMin: this.edadMin,
      edadMax: this.edadMax
    };
  
    this.limpiadorService.getLimpiadores(criterio).subscribe(
      (data: Limpiador[]) => {
        this.limpiadores = data;
      },
      (error) => {
        console.log('Error al realizar la búsqueda', error);
      }
    );
  }

  limpiarNombreLimpiador() {
    this.nombreLimpiador = '';
  }
}
