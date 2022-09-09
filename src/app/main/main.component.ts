import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  active = true;
  
  constructor(
    private storeService: StoreService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
    
    ngOnInit(): void {
      this.route.url.subscribe(m => { if (m[0].path) { this.active = true }});
        this.router.url === '/main' ? this.active = true : this.active = false;
  }

  onTypeButtonClick(type: string): void {
    this.router.navigate([`main/${type}`]);
    this.route.url.subscribe(m => { if (this.router.url === '/main') { this.active = true } else {this.active = false} });
  }
}
