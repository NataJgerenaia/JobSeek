import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AuthService } from '../../auth.service';  
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-seekereg',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], 
  providers: [AuthService], 
  templateUrl: './seekereg.component.html',
  styleUrls: ['./seekereg.component.css']
})
export class SeekeregComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,    private router: Router) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required] 
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = { ...this.registrationForm.value, role: 'seeker' };
      this.authService.registerUser(formData).subscribe(
        (response) => {
          console.log(response);
          alert('Registration successful!');
          this.router.navigate(['/homepage']);
        },
        (error) => {
          console.error(error);
          alert('Registration failed!');
        }
      );
    }
  }
  
}
