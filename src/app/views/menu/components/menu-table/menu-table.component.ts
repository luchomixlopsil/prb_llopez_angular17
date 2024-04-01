import { Component, Input } from '@angular/core';
import { Menu } from '@interfaces/menus/menus';

@Component({
  selector: 'menu-table',
  standalone: true,
  imports: [],
  templateUrl: './menu-table.component.html',
  styleUrl: './menu-table.component.scss'
})
export class MenuTableComponent {
  @Input({ required: true }) menus!: Menu[];
}
