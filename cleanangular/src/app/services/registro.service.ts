import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private API_URL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  registrarCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/registro`, cliente);
  }
}