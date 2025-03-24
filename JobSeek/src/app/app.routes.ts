import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RegistrationComponent } from './Auth/registration/registration.component';
import { LoginComponent } from './Auth/login/login.component';
import { CompanyComponent } from './company/company.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';

export const routes: Routes = [
  { path: '', component: LandingComponent }, 
  { path: 'register', component: RegistrationComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'landing', component:LandingComponent},
  { path: 'company', component:CompanyComponent}, 
  { path: 'homepage', component: HomepageComponent},
  { path: 'Admin', component: AdminComponent},
  { path:'vacancy-details/:id', component: VacancyDetailsComponent},
  { path: 'login', component: LoginComponent },
];

