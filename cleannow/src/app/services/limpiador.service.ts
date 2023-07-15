import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Limpiador } from '../model/limpiador';
import { CriterioBusqueda } from '../model/criterio-busqueda';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LimpiadorService {
  private apiUrl = 'http://localhost:8080/limpiadores2';

  constructor(private http: HttpClient) { }

  getAllLimpiadores(): Observable<Limpiador[]> {
    const url = `${this.apiUrl}/buscar`;
    return this.http.get<Limpiador[]>(url);
  }
  getLimpiadores(filtros: CriterioBusqueda): Observable<Limpiador[]> {
    const url = `${this.apiUrl}/buscar`;
    const params = new HttpParams()
      .set('nombre', filtros.nombre || '')
      .set('calificacionMin', filtros.calificacionMin?.toString() || '')
      .set('calificacionMax', filtros.calificacionMax?.toString() || '')
      .set('numServiciosMin', filtros.numServiciosMin?.toString() || '')
      .set('numServiciosMax', filtros.numServiciosMax?.toString() || '')
      .set('edadMin', filtros.edadMin?.toString() || '')
      .set('edadMax', filtros.edadMax?.toString() || '');
    
    return this.http.get<Limpiador[]>(url, { params }).pipe(
      tap((limpiadores) => {
        console.log('Llamada HTTP realizada correctamente con filtros:', filtros);
        console.log('Resultado de la llamada HTTP:', limpiadores);
      })
    );
  }
  
  getLimpiadoresConFiltros(filtros: any): Observable<Limpiador[]> {
    const url = `${this.apiUrl}/buscar`;
    const params = new HttpParams({ fromObject: filtros });
    return this.http.get<Limpiador[]>(url, { params });
  }

  getNombreLimpiador(
    nombre: string,
  ): Observable<CriterioBusqueda[]> {
    const url = `${this.apiUrl}/buscar`;
    const params = new HttpParams()
      .set('nombre', nombre)

    return this.http.get<CriterioBusqueda[]>(url, { params });
  }
}
