import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/auth/login';

  private baseUrl = 'http://localhost:8080/auth'
  constructor(private http: HttpClient) {}

  login(obj: any): Observable<string> {
    return this.http.post<string>(this.apiUrl, obj, { responseType: 'text' as 'json' });
  }

  forgotPassword(obj: any): Observable<any> {
    return this.http.post<string>(`${this.baseUrl}/forgot-password`, obj, { responseType: 'text' as 'json' });
  }
  
}
