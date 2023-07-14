import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Evaluacion } from '../model/evaluacion';
@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
  private apiUrl = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) {}

  public crearEvaluacion(calificacion: number, comentario: string): Observable<any> {
    const evaluacion = { calificacion, comentario };
    return this.http.post<any>(`${this.apiUrl}/evaluaciones`, evaluacion);
  }
  public obtenerEvaluaciones(): Observable<Evaluacion[]> {
    return this.http.get<Evaluacion[]>(`${this.apiUrl}/evaluaciones`);
  }
  eliminarEvaluacion(idEvaluacion: number): Observable<void> {
    const url = `${this.apiUrl}/evaluaciones/${idEvaluacion}`;
    return this.http.delete<void>(url);
  }
}
