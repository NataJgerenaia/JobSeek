import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  
  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => users.filter(user => user.role === 'company'))
    );
  }

  
  updateCompanyStatus(companyId: string, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${companyId}`, { status: status });
  }
  registerCompany(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
  
}
