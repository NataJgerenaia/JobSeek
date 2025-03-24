import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RegistrationComponent } from './Auth/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { compileOpaqueAsyncClassMetadata } from '@angular/compiler';
import { CompanyService } from './company/company.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, LandingComponent, RegistrationComponent, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'JobSeek';
}
