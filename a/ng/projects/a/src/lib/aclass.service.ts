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

import { AclassAPI } from './aclass-api';
import { AclassDB } from './aclass-db';



@Injectable({
  providedIn: 'root'
})
export class AclassService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Kamar Raïmo: Adding a way to communicate between components that share information
  // so that they are notified of a change.
  AclassServiceChanged: BehaviorSubject<string> = new BehaviorSubject("");

  private aclasssUrl = 'http://localhost:8080/aclasss';

  constructor(
    private http: HttpClient
  ) { }

  /** GET aclasss from the server */
  getAclasss(): Observable<AclassDB[]> {
    return this.http.get<AclassDB[]>(this.aclasssUrl)
      .pipe(
        tap(_ => this.log('fetched aclasss')),
        catchError(this.handleError<AclassDB[]>('getAclasss', []))
      );
  }

  /** GET aclass by id. Will 404 if id not found */
  getAclass(id: number): Observable<AclassDB> {
    const url = `${this.aclasssUrl}/${id}`;
    return this.http.get<AclassDB>(url).pipe(
      tap(_ => this.log(`fetched aclass id=${id}`)),
      catchError(this.handleError<AclassDB>(`getAclass id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new aclass to the server */
  postAclass(aclassAPI: AclassAPI): Observable<AclassDB> {
    return this.http.post<AclassDB>(this.aclasssUrl, aclassAPI, this.httpOptions).pipe(
      tap((newAclass: AclassDB) => this.log(`added aclass w/ id=${newAclass.ID}`)),
      catchError(this.handleError<AclassDB>('addAclass'))
    );
  }

  /** DELETE: delete the aclassdb from the server */
  deleteAclass(aclassdb: AclassDB | number): Observable<AclassDB> {
    const id = typeof aclassdb === 'number' ? aclassdb : aclassdb.ID;
    const url = `${this.aclasssUrl}/${id}`;

    return this.http.delete<AclassDB>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted aclassdb id=${id}`)),
      catchError(this.handleError<AclassDB>('deleteAclass'))
    );
  }

  /** PUT: update the aclassdb on the server */
  updateAclass(aclassdb: AclassDB): Observable<AclassDB> {
    const id = typeof aclassdb === 'number' ? aclassdb : aclassdb.ID;
    const url = `${this.aclasssUrl}/${id}`;

    return this.http.put(url, aclassdb, this.httpOptions).pipe(
      tap(_ => this.log(`updated aclassdb id=${aclassdb.ID}`)),
      catchError(this.handleError<AclassDB>('updateAclass'))
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
