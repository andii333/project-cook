import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Dish } from 'src/assets/hard-code/dishes';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  dish: Dish;
  
  constructor(
    private route: ActivatedRoute,
    private store: StoreService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dish = this.store.dishes.find(dish => dish.title === params['title']) || this.store.dishes[0];
    })
  }

}
