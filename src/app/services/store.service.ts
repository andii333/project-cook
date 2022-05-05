import { Injectable } from '@angular/core';
import { allDishes, Dish } from 'src/assets/hard-code/dishes';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  dishes: Dish[];

  constructor() {
    this.dishes = JSON.parse(localStorage.getItem('dishes') || '[]');
  }

  addNewDish(dish: Dish): void {
    // this.dishes.push(dish);
    // localStorage.setItem('dish', JSON.stringify(dish));
    const list = JSON.parse(localStorage.getItem('dishes') || '[]');
    list.push(dish);
    this.dishes = list;
    localStorage.setItem('dishes', JSON.stringify(list));
  }
}
