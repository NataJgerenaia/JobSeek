import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';  
import { ResponseModel } from '../../models/response.models';  

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  // Inject AuthService here
  constructor(
    private fb: FormBuilder, 
    private http: HttpClient, 
    private router: Router, 
    private authService: AuthService  
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  
  goOnLanding(): void {
    this.router.navigate(['/landing']);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
  
      this.authService.loginUser(email, password).subscribe(
        (response) => {
          if (response.status === 'success') {
            alert(response.message); 
  
            
            if (response.role === 'admin') {
              this.router.navigate(['/Admin']); 
            } else if (response.role === 'seeker') {
              this.router.navigate(['/homepage']); 
            } else if (response.role === 'company') {
              this.router.navigate(['/company']); 
            } else {
              alert('Unknown user role!');
            }
          } else {
            alert(response.message); 
          }
        },
        (error) => {
          console.error('Error during login:', error);
          alert('An error occurred. Please try again later.');
        }
      );
    } else {
      alert('Please fill in the form correctly.');
    }
  }
  
}
