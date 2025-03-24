import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../vacancy/vacancy.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vacancy-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css'],
  providers: [VacancyService],
})
export class VacancyDetailsComponent implements OnInit {
  vacancy: any; 

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    
    const vacancyId = this.route.snapshot.params['id'];

    
    this.vacancyService.getVacancyById(vacancyId).subscribe((vacancy) => {
      this.vacancy = vacancy;
    });
  }
}
