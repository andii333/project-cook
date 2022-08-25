import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, MinLengthValidator, NgForm, Validators } from '@angular/forms';
import { findIndex, last, lastValueFrom } from 'rxjs';
import { StoreService } from '../services/store.service';
enum FormField {
  Type = 'type',
  Title = 'title',
  Ingredients = 'ingredients',
  Receipt = 'receipt'
}


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  form: FormGroup;

  field = FormField;

  constructor(
    private fb: FormBuilder,
    private store: StoreService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      [FormField.Type]: ['', Validators.required],
      [FormField.Title]: ['', Validators.required],
      [FormField.Receipt]: ['', Validators.required],
      [FormField.Ingredients]: this.fb.array([new FormControl('', Validators.required)])
    });

    this.form.valueChanges.subscribe(changes => {
      console.log(this.form)
    })
  }

  getIngredients(): FormArray {
    return this.form.get(this.field.Ingredients) as FormArray;
  }
  disableButtonClose: boolean = true;
  addIngredient(): void {
    (this.form.get(this.field.Ingredients) as FormArray).push(new FormControl('', Validators.required));
    // console.log(this.form.get(this.field.Ingredients) )
    this.disableButtonClose = false;
    // if (this.field.Ingredients[1]
  }

  submit() {
    const newDish = this.form.getRawValue();
    this.store.addNewDish(newDish);
    this.form.reset()
    alert('Рецепт успішно додано')
    this.form.setControl(FormField.Ingredients, this.fb.array([new FormControl('', Validators.required)], Validators.required));
  }


  closeFieldIngridient(i: number) {
    (this.form.get(this.field.Ingredients) as FormArray).removeAt(i);
  }

  shouldDisableAddButton(): boolean {
    return !!this.form.get(this.field.Ingredients)?.invalid;
  }

  shouldDisableDeleteButton(): boolean {
    return (this.form.get(this.field.Ingredients) as FormArray)?.length < 2;
  }

  public onKeydownMain (event: { key: string; preventDefault: () => void; }): void {
    if (event.key === "Enter" || event.key === "Tab") {
      event.preventDefault();
    }
  }
  o = function fk (n:number):number {
    return (n != 1) ? n * fk(n - 1) : 1;
  }
  
}


