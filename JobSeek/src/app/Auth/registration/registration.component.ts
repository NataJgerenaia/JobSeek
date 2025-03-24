import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeekeregComponent } from './seekereg/seekereg.component';
import { CompregComponent } from './compreg/compreg.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  standalone: true,
  providers: [AuthService], 
  imports: [CommonModule, SeekeregComponent, CompregComponent],
})
export class RegistrationComponent {
  role: 'jobSeeker' | 'company' | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.role = this.route.snapshot.paramMap.get('role') as 'jobSeeker' | 'company' | null;

    
    console.log('Role:', this.role);
  }
}
