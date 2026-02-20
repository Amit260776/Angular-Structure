import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

type Query = Record<string, string | number | boolean | null | undefined>;

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl; // לדוגמה: https://api.myapp.com

  get<T>(path: string, query?: Query): Observable<T> {
    return this.http
      .get<T>(this.baseUrl + path, { params: this.toParams(query) })
      .pipe(catchError(this.handleError));
  }

  post<T>(path: string, body: unknown, query?: Query): Observable<T> {
    return this.http
      .post<T>(this.baseUrl + path, body, { params: this.toParams(query) })
      .pipe(catchError(this.handleError));
  }

  put<T>(path: string, body: unknown, query?: Query): Observable<T> {
    return this.http
      .put<T>(this.baseUrl + path, body, { params: this.toParams(query) })
      .pipe(catchError(this.handleError));
  }

  patch<T>(path: string, body: unknown, query?: Query): Observable<T> {
    return this.http
      .patch<T>(this.baseUrl + path, body, { params: this.toParams(query) })
      .pipe(catchError(this.handleError));
  }

  delete<T>(path: string, query?: Query): Observable<T> {
    return this.http
      .delete<T>(this.baseUrl + path, { params: this.toParams(query) })
      .pipe(catchError(this.handleError));
  }

  private toParams(query?: Query): HttpParams {
    let params = new HttpParams();
    if (!query) return params;

    for (const [key, value] of Object.entries(query)) {
      if (value === null || value === undefined) continue;
      params = params.set(key, String(value));
    }
    return params;
  }

  private handleError(err: any) {
    // כאן אפשר למפות שגיאות בצורה אחידה
    return throwError(() => err);
  }
}