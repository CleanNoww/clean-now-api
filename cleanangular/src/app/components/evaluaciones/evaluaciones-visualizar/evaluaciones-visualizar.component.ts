import { Component, OnInit} from '@angular/core';
import { EvaluacionService } from 'src/app/services/evaluacion.service';
import { Evaluacion } from 'src/app/model/evaluacion';
@Component({
  selector: 'app-evaluaciones-visualizar',
  templateUrl: './evaluaciones-visualizar.component.html',
  styleUrls: ['./evaluaciones-visualizar.component.css']
})
export class EvaluacionesVisualizarComponent implements OnInit {
  evaluaciones: Evaluacion[] = [];

  constructor(private evaluacionService: EvaluacionService) {}

  ngOnInit(): void {
    this.obtenerEvaluaciones();
  }

  obtenerEvaluaciones(): void {
    this.evaluacionService.obtenerEvaluaciones().subscribe(
      (evaluaciones: Evaluacion[]) => {
        this.evaluaciones = evaluaciones;
      },
      (error: any) => {
        console.error('Error al obtener las evaluaciones', error);
      }
    );
  }
}