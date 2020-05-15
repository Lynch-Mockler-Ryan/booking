import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Booking } from '../model/booking';

@Injectable({
  providedIn: 'root'
})

export class BookingService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

  public API = '//localhost:8080';

  constructor(private http: HttpClient, ) { }

  add(Booking: any): Observable<any> {

    let result: Observable<any>;

    result = this.http.post(this.API + '/addBooking', Booking, this.httpOptions).pipe(
      tap(_ => console.log(`adding Booking (post) = ${Booking}`)),
      catchError(this.handleError<any>('post Booking details')));
    return result;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
