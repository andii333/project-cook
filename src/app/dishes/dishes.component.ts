import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dish } from 'src/assets/hard-code/dishes';
import { StoreService } from '../services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  dishes: Dish[];
  selectedDish: Dish;
  type: string;
  subscription!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.dishes = this.store.dishes.filter(dish => dish.type === params['type']);
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }

  onDishClick(dish: Dish): void {
    this.router.navigate([`main/${this.type}/${dish.title}`]);
  }
}
