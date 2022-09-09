import { Injectable } from '@angular/core';
import { Dish } from 'src/assets/hard-code/dishes';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  dishes: Dish[];
  constructor(private firestore: AngularFirestore) {
    this.firestore.collection('dishes').snapshotChanges().subscribe(collection => {
      const dishesList = collection.map(col => col.payload.doc.data());
      this.dishes = dishesList as Dish[];
    })
  }

  addNewDish(data:Dish) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("dishes")
        .add(data)
        .then(res => { }, err => reject(err));
    });

  }

}
