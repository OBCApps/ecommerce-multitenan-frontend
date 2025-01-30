import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './flowbite.service';
import { AuthorizationService } from './pages/shared/global-components/authorization/auth.service';
import { TenantService } from './pages/shared/global-components/authorization/tenant.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-multitenand-frontend';
  constructor(
    private flowbiteService: FlowbiteService,
    private authorizationService: AuthorizationService,
    private tenantService: TenantService
  ) {

  }
  ngOnInit(): void {
    this.authorizationService.fetchTenantId();

    this.tenantService.getTenantConfig().subscribe(response => {
      if (response) {
        this.tenantService.updateFavicon(response.data.favicon); // Cambia el favicon
        this.tenantService.updateTitle(response.data.title);
      }
    });

    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });


  }

  
}
