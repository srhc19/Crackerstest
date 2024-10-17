import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://testing.competitivecracker.com/api/v1/user'; 

  constructor(private http: HttpClient) {}

    registerUser(details: {
      name: string;
      mobile: string;
      email: string;
      device: string;
      user_type: string;
      social_auth?: number;
    }): Observable<any> {

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });


      return this.http.post(`${this.apiUrl}/register`, details, { headers });
    }

    googleLogin(details: {
      username: string; 
      device: string; 
      social_auth: number;
    }): Observable<any> 
    {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(`${this.apiUrl}/login`, details, { headers });
    }

    getUserCourses(params?: {
      search?: string;
      sort?: string;
      category?: string;
      current_page?: number;
      per_page?: number;
    }): Observable<any>
    {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.get(`${this.apiUrl}/courses`, { headers, params });
    }
}
