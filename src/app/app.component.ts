import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

const firebaseConfig = {
  apiKey: "AIzaSyCWFFyCm_o6NZyQ3oweY9UXjT4d2k20W1U",
  authDomain: "andrii-cook.firebaseapp.com",
  databaseURL: "https://andrii-cook-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "andrii-cook",
  storageBucket: "andrii-cook.appspot.com",
  messagingSenderId: "760675137580",
  appId: "1:760675137580:web:90e4221648c8e7792bb989",
  measurementId: "G-J63Y3PDZKE"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);