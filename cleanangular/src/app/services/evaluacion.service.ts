import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
  private apiUrl = 'http://localhost:8080/api/v1/evaluaciones';
  constructor (){}
  

}
