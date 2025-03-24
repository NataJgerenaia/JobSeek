import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { VacancyService } from '../vacancy/vacancy.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule, HttpClientModule, HeaderComponent],  
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [VacancyService]
})
export class CompanyComponent implements OnInit {
  vacancies: any[] = []; 
  editingIndex: number | null = null; 
  editFormData: any = {};
  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    
    this.vacancyService.getVacancies().subscribe(vacancies => {
      this.vacancies = vacancies;
    });
  }

  
  onSubmit(form: any): void {
    if (form.valid) {
      const vacancy = {
        title: form.value.title,
        category: form.value.category,
        description: form.value.description,
        publishDate: form.value.publishDate,
        deadlineDate: form.value.deadlineDate,
        status: 'enabled',
      };

      if (this.editingIndex !== null) {
       
        const vacancyId = this.vacancies[this.editingIndex].id;
        const updatedVacancy = { ...vacancy, id: vacancyId };

        this.vacancyService.updateVacancy(vacancyId, updatedVacancy).subscribe(() => {
          this.vacancies[this.editingIndex!] = updatedVacancy; 
          this.editingIndex = null; 
          this.editFormData = {}; 
          form.reset();
        });
      } else {
        
        this.vacancyService.addVacancy(vacancy).subscribe((newVacancy) => {
          this.vacancies.push(newVacancy); 
          form.reset(); 
        });
      }
    }
  }

  
  toggleVacancyStatus(index: number): void {
    const vacancy = this.vacancies[index]; 
    const updatedStatus = vacancy.status === 'enabled' ? 'disabled' : 'enabled'; 

    const updatedVacancy = { ...vacancy, status: updatedStatus }; 

    
    this.vacancyService.updateVacancy(vacancy.id, updatedVacancy).subscribe(() => {
      this.vacancies[index].status = updatedStatus; 
    }, error => {
      console.error('Error updating status', error);
    });
  }

 
editVacancy(index: number): void {
  this.editingIndex = index; 
  this.editFormData = { ...this.vacancies[index] }; 

  
  const formElement = document.querySelector('.flexed');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

  
  removeVacancy(index: number): void {
    const vacancyId = this.vacancies[index].id;

    this.vacancyService.removeVacancy(vacancyId).subscribe(() => {
      this.vacancies.splice(index, 1); 
    });
  }
}