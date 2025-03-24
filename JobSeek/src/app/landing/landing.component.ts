import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  message: string = 'Welcome to JobSeek!';
  isMessageChanged: boolean = false;
  isRoleSelected: boolean = false;
  isJobSeekerSelected: boolean = false;
  isCompanySelected: boolean = false;
  isAdminSelected: boolean = false;
  isMainMColorChanged: boolean = false;
  isAccountCreated: boolean = false;
  selectedRole: string | null = null;

  constructor(private router: Router) {}

  changeMessage(): void {
    this.message = 'Join as a Company or Job Seeker';
    this.isMessageChanged = true;
    this.isMainMColorChanged = true;
  }

  selectRole(role: string): void {
    if (role === 'jobSeeker') {
      this.isJobSeekerSelected = true;
      this.isCompanySelected = false;
      this.isAdminSelected = false;
    } else if (role === 'company') {
      this.isCompanySelected = true;
      this.isJobSeekerSelected = false;
      this.isAdminSelected = false;
    } else if (role === 'Admin') {
      this.isAdminSelected = true;
      this.isCompanySelected = false;
      this.isJobSeekerSelected = false;
    }
    this.isRoleSelected = true;
    this.selectedRole = role;
  }

  createAccount(): void {
    if (this.selectedRole === 'jobSeeker') {
      this.router.navigate(['/register', { role: 'jobSeeker' }]);
    } else if (this.selectedRole === 'company') {
      this.router.navigate(['/register', { role: 'company' }]);
    }
  }

  logIn(): void {
    this.router.navigate(['/login']);
  }
}
