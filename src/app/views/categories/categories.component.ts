import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Categories } from '@interfaces/categories/categories';
import { CategoriesServices } from '@service/categories.service';
import { categoriesComponents } from './components/categories-components';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ColorDirective } from '@directives/color.directive';
import { ActiveWordMayusPipe } from '@pipes/active-word-mayus.pipe';
 
@Component({
  selector: 'categories',
  standalone: true,
  imports: [CommonModule, ...categoriesComponents, ColorDirective, ActiveWordMayusPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {
  private categoryService = inject(CategoriesServices);
  private activatedRoute = inject(ActivatedRoute);


  // categories: Signal<Categories[] | undefined> = toSignal(this.categoryService.getAllCategories());//this.categoryService.getCategories();
  categories: Signal<Categories[] | undefined> = toSignal(this.categoryService.allCategories$);
  showForm = signal<boolean>(false);

  // constructor() {
  //   this.getAllCategories();
  // }

  showFormFn(): void {
    this.showForm.set(!this.showForm());
  }

  addDataFn(category: Categories): void {
    category.id = this.categories()!.length + 1;
    // this.categories.push(category);
    this.categoryService.postNewCategory(category).subscribe(console.log);
    this.showForm.set(false);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
      if (data['id']) {
        this.showFormFn();
      }
    });
  }














  //********
  //********
  //********             PRIVATE METHODS
  //********
  //********

  private getAllCategories(): void {
    // this.categoryService.getAllCategories().subscribe((response) => this.categories = response);
    this.categoryService.getAllCategories().subscribe(console.log);
  }
}
