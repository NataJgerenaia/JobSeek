import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/response.models'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}  

  registerUser(formData: any) {
    return this.http.post('http://localhost:3000/users', formData);  
  }

  loginUser(email: string, password: string): Observable<{ status: string; message: string; role?: string }> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(
          u =>
            (u.email === email && u.password === password) || // For seekers
            (u.employeeEmail === email && u.password === password) // For companies
        );
        if (user) {
          return { status: 'success', message: 'You are logged in!', role: user.role };
        } else {
          return { status: 'error', message: 'You have not registered or entered incorrect credentials.' };
        }
      })
    );
  }  
  
}
