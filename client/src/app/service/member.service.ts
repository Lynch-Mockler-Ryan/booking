import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Member } from '../model/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

  public API = '//localhost:8080';

  constructor(private http: HttpClient,) { 
    
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/members');
  }

  save(Member: any): Observable<any> {
    
    let result: Observable<any>;
    

      result = this.http.post(this.API + '/saveMember', Member, this.httpOptions).pipe(
        tap(_ => console.log(`saving Member (post) = ${Member}`)),
        catchError(this.handleError<any>('post Member details')));

   
    return result;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
