import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { VacancyService } from '../vacancy/vacancy.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  imports: [NgFor, FormsModule, HttpClientModule, CommonModule, RouterModule,HeaderComponent], 
  providers: [VacancyService], 
})
export class HomepageComponent {
  vacancies: any[] = [];
  filteredVacancies: any[] = [];
  searchTitle: string = '';
  searchCategory: string = '';
  searchCompany: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 10; 
  totalItems: number = 0;

  constructor(private vacancyService: VacancyService, private router: Router) {}


  authenticatedUser: string = '';

  
  ngOnInit(): void {
    
    const user = localStorage.getItem('authenticatedUser');
    this.authenticatedUser = user ? user : 'Guest';
  
   
    this.vacancyService.getVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.totalItems = vacancies.length;
  
      this.removeDisabledVacancies();
      localStorage.setItem('vacancies', JSON.stringify(this.vacancies));
      this.filteredVacancies = this.vacancies;
    });
  
    const savedVacancies = localStorage.getItem('vacancies');
    if (savedVacancies && this.vacancies.length === 0) {
      this.vacancies = JSON.parse(savedVacancies);
      this.removeDisabledVacancies();
      this.filteredVacancies = this.vacancies;
    }
  }

  
disableVacancy(vacancyId: number) {
 
  const vacancyToDisable = this.vacancies.find(vacancy => vacancy.id === vacancyId);

  
  if (vacancyToDisable) {
    vacancyToDisable.status = 'disabled';

    
    this.vacancyService.updateVacancy(vacancyToDisable.id.toString(), vacancyToDisable).subscribe(() => {
      
      this.removeDisabledVacancies();
      this.filterVacancies();  
    });
  }
}

  
  removeDisabledVacancies() {
    this.vacancies = this.vacancies.filter((vacancy) => vacancy.status !== 'disabled');
   
    this.totalItems = this.vacancies.length;
  }

  filterVacancies() {
    
    const filtered = this.vacancies.filter((vacancy) => {
      const matchesTitle = vacancy.title
        .toLowerCase()
        .includes(this.searchTitle.toLowerCase());
      const matchesCategory = this.searchCategory
        ? vacancy.category === this.searchCategory
        : true;
      const matchesCompany = this.searchCompany
        ? vacancy.company
            .toLowerCase()
            .includes(this.searchCompany.toLowerCase())
        : true;
  
      return matchesTitle && matchesCategory && matchesCompany;
    });
  
    
    this.totalItems = filtered.length;
  
    
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages; 
    }
  
    this.filteredVacancies = filtered.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/vacancy-details', id]);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.filterVacancies(); 
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.filterVacancies(); 
    }
  }

 
  onSearchButtonClick() {
   
    this.filterVacancies();
  }

  
  onSearchChange() {
    this.filterVacancies();
  }
}

