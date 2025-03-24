import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private apiUrl = 'http://localhost:3000/vacancies';  

  constructor(private http: HttpClient) {}

 
  addVacancy(vacancyData: any): Observable<any> {
    return this.http.post(this.apiUrl, vacancyData);  
  }


  getVacancies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  
  }

  updateVacancy(id: number, updatedVacancy: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedVacancy).pipe(
     
      switchMap(() => this.getVacancies()) 
    );
  }  
 
  removeVacancy(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);  
  }
  
  getVacancyById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
