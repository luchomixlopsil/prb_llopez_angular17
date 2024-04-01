import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Menu } from '@interfaces/menus/menus';
import { fieldsComponents } from '../../../../shared/fields/fields-components';

type FormData = {
  [key in keyof Menu]: FormControl<Menu[key] | unknown>
};

@Component({
  selector: 'menu-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ...fieldsComponents],
  templateUrl: './menu-form.component.html',
  styleUrl: './menu-form.component.scss'
})
export class MenuFormComponent {
  @Output() addData: EventEmitter<Menu> = new EventEmitter<Menu>();

  form: FormGroup<FormData> = new FormGroup<FormData>({
    id: new FormControl({ value: 0, disabled: true }),
    dishName: new FormControl(),
    dishDescription: new FormControl(),
    idCategory: new FormControl(),
    salePrice: new FormControl(),
    productionCost: new FormControl(),
    allergens: new FormControl(),
    dishImage: new FormControl()
  });

  constructor() {
  }

  saveData(): void {
    const data = this.form.getRawValue();
    this.addData.next(data as Menu);
  }

}
