import { Component } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers: [CompanyService]
})
export class AdminComponent {
  companies: any[] = [];

  constructor(private companyService: CompanyService) {}

  
  ngOnInit() {
    
    this.companyService.getCompanies().subscribe((users) => {
      this.companies = users.filter(user => user.role === 'company'); 
    });
  }

 
  approveCompany(companyId: string) {
    this.companyService.updateCompanyStatus(companyId, 'approved').subscribe(() => {
      this.reloadCompanies();
    });
  }

  
  blockCompany(companyId: string) {
    this.companyService.updateCompanyStatus(companyId, 'blocked').subscribe(() => {
      this.reloadCompanies();
    });
  }

  
  unblockCompany(companyId: string) {
    this.companyService.updateCompanyStatus(companyId, 'approved').subscribe(() => {
      this.reloadCompanies();
    });
  }

 
  private reloadCompanies() {
    this.companyService.getCompanies().subscribe((users) => {
      this.companies = users.filter(user => user.role === 'company');
    });
  }
}
