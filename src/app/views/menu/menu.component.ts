import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal, Signal } from '@angular/core';
import { Menu } from '@interfaces/menus/menus';
import { MenuService } from '@service/menu.service';
import { menusComponents } from './components/menus-components';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ActiveWordMayusPipe } from '@pipes/active-word-mayus.pipe';
import { octPlus } from '@ng-icons/octicons';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [CommonModule, ...menusComponents, NgIconComponent,  ActiveWordMayusPipe],
  viewProviders: [provideIcons({ octPlus })],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  //menu = signal<Menu[]>(new MenuService().getAllMenus());

  private menuService = inject(MenuService);
  private activatedRoute = inject(ActivatedRoute);

  menus: Signal<Menu[] | undefined> = toSignal(this.menuService.allMenus$);
  showForm = signal<boolean>(false);

  showFormFn(): void {
    this.showForm.set(!this.showForm());
  }

  addDataFn(menu: Menu): void {
    menu.id = this.menus()!.length + 1;    
    this.menuService.postNewMenu(menu).subscribe(console.log);
    this.showForm.set(false);
  }

  ngOnInit(): void {
    console.log('entra en oninit');
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
      
      if (data['id']) {
        this.menus = computed(():Menu[]=>{
          return this.menuService.getMenus().filter((f)=>f.id===Number(data['id']));
        });
      }
    });
  }

  private getAllMenus(): void {
    this.menuService.getAllMenus().subscribe(console.log);
  }

}
