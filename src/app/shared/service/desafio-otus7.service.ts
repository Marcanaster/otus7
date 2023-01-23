import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Piloto } from '../models/piloto';

@Injectable({
  providedIn: 'root'
})
export class DesafioOtus7Service {
  url: string = 'http://ergast.com/api/f1/drivers.json'

  constructor(private http: HttpClient) { }

  getDrivers() : Observable<any[]>{
    return this.http.get<any[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
