import { Component, signal } from '@angular/core';
import { Orders } from '@interfaces/orders/orders';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octPlus } from '@ng-icons/octicons';
import { OrdersService } from '@service/orders.service';

@Component({
  selector: 'orders',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  viewProviders: [provideIcons({ octPlus })]
})
export default class OrdersComponent {
  order = signal<Orders[]>(new OrdersService().getAllOrders());
}
