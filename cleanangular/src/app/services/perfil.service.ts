import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private API_URL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  obtenerCliente(idCliente: number): Observable<Cliente> {
    const url = `${this.API_URL}/registro/${idCliente}`;
    return this.http.get<Cliente>(url);
  }
  
}