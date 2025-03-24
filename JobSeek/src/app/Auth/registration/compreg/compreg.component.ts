import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Use RouterModule instead of Router
import { CompanyService } from '../../../company/company.service';
@Component({
  selector: 'app-compreg',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule, RouterModule], // Correct imports
  providers: [CompanyService],
  templateUrl: './compreg.component.html',
  styleUrls: ['./compreg.component.css'],
})
export class CompregComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private companyService: CompanyService,  private router: Router) {
    this.registrationForm = this.fb.group({
      companyName: ['', Validators.required],
      companyTaxId: ['', Validators.required],
      employeeEmail: ['', [Validators.required, Validators.email]],
      employeeName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = { 
        ...this.registrationForm.value, 
        role: 'company', 
        status: 'pending'  
      };
      this.companyService.registerCompany(formData).subscribe(
        (response) => {
          console.log(response);
          alert('Company registration successful!');
          this.router.navigate(['/company']);
        },
        (error) => {
          console.error(error);
          alert('Company registration failed! Please try again.');
        }
      );
    }
  }
}
