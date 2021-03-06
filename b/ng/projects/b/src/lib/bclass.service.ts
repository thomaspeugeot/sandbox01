 // generated by GenNgService.go
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/*
 * Kamar : Ajout d'un moyen pour communiquer entre les composants qui partagent de l'information
 * afin qu'ils soient notifiés d'un changement.
 */
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { BclassAPI } from './bclass-api';
import { BclassDB } from './bclass-db';



@Injectable({
  providedIn: 'root'
})
export class BclassService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Kamar Raïmo: Adding a way to communicate between components that share information
  // so that they are notified of a change.
  BclassServiceChanged: BehaviorSubject<string> = new BehaviorSubject("");

  private bclasssUrl = 'http://localhost:8080/bclasss';

  constructor(
    private http: HttpClient
  ) { }

  /** GET bclasss from the server */
  getBclasss(): Observable<BclassDB[]> {
    return this.http.get<BclassDB[]>(this.bclasssUrl)
      .pipe(
        tap(_ => this.log('fetched bclasss')),
        catchError(this.handleError<BclassDB[]>('getBclasss', []))
      );
  }

  /** GET bclass by id. Will 404 if id not found */
  getBclass(id: number): Observable<BclassDB> {
    const url = `${this.bclasssUrl}/${id}`;
    return this.http.get<BclassDB>(url).pipe(
      tap(_ => this.log(`fetched bclass id=${id}`)),
      catchError(this.handleError<BclassDB>(`getBclass id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new bclass to the server */
  postBclass(bclassAPI: BclassAPI): Observable<BclassDB> {
    return this.http.post<BclassDB>(this.bclasssUrl, bclassAPI, this.httpOptions).pipe(
      tap((newBclass: BclassDB) => this.log(`added bclass w/ id=${newBclass.ID}`)),
      catchError(this.handleError<BclassDB>('addBclass'))
    );
  }

  /** DELETE: delete the bclassdb from the server */
  deleteBclass(bclassdb: BclassDB | number): Observable<BclassDB> {
    const id = typeof bclassdb === 'number' ? bclassdb : bclassdb.ID;
    const url = `${this.bclasssUrl}/${id}`;

    return this.http.delete<BclassDB>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted bclassdb id=${id}`)),
      catchError(this.handleError<BclassDB>('deleteBclass'))
    );
  }

  /** PUT: update the bclassdb on the server */
  updateBclass(bclassdb: BclassDB): Observable<BclassDB> {
    const id = typeof bclassdb === 'number' ? bclassdb : bclassdb.ID;
    const url = `${this.bclasssUrl}/${id}`;

    return this.http.put(url, bclassdb, this.httpOptions).pipe(
      tap(_ => this.log(`updated bclassdb id=${bclassdb.ID}`)),
      catchError(this.handleError<BclassDB>('updateBclass'))
    );
  }



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {

  }
}
