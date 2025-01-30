import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TenantService } from '../../../../../shared/global-components/authorization/tenant.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  logo: string;
  constructor(
    private tenantService: TenantService
  ) {

  }

  ngOnInit(): void {

    this.tenantService.getLogo().subscribe(logo => {
      this.logo = logo ?? './assets/images/image.png';
    });

    
  }
}
