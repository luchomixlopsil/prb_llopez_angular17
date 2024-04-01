import { Orders } from '@interfaces/orders/orders';
import { OrdersResponse } from '@model/orders/orders-response';
import { orders } from '../const-data/orders';
import { OrdersMapper } from '@mapper/orders/orders-mapper';

export class OrdersService{
    getAllOrders(): Orders[]{
        const ordersResponse = orders.map((orders) => new OrdersResponse(orders));
        const orderMapper = ordersResponse.map((orders) => OrdersMapper.map(orders));
        return orderMapper;
    }
}