import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:8080/api/email';

  constructor(private http: HttpClient) {}

  sendEmail(email: string): Observable<any> {
 
    return this.http.post<any>(this.apiUrl, {email});
  }
}

