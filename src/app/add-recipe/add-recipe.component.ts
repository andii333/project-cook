import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, MinLengthValidator, NgForm, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from '../services/store.service';

enum FormField {
  Type = 'type',
  Title = 'title',
  Photo = 'photo',
  Ingredients = 'ingredients',
  Receipt = 'receipt',
  Author = 'author',
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
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      [FormField.Type]: ['', Validators.required],
      [FormField.Title]: ['', Validators.required],
      [FormField.Photo]: [''],
      [FormField.Receipt]: ['', Validators.required],
      [FormField.Author]: ['', Validators.required],
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
    this.disableButtonClose = false;
  }

  onFileSelected(event:any){
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event:any) =>{
  this.form.patchValue({ photo: event.target.result })
}
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
  // o = function fk (n:number):number {
  //   return (n != 1) ? n * fk(n - 1) : 1;
  // }
  
}


