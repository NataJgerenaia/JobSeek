import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true, 
})
export class HeaderComponent {
  @Input() username: string = '';  

  constructor(private router: Router) {}

  logout() {
    
    localStorage.removeItem('authenticatedUser');
    this.router.navigate(['/login']);  
  }
}
