import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from './services/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cook';
  
  constructor(
    private router: Router,
    private storeService: StoreService
    ) {}

  goToPage(page: string): void {
 this.router.navigate([page]);
  }
}
