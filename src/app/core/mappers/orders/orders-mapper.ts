import { Orders, DishesList } from '@interfaces/orders/orders';
import { OrdersResponse, ListaPlatos } from '@model/orders/orders-response';

export class OrdersMapper {
    static map(data: OrdersResponse): Orders {
        return {
            id: data.id,
            orderDate: data.fecha_pedido,
            hourDate: data.hora_pedido,
            idClient: data.id_cliente, 
            table: data.mesa,        
            orderState: data.estado_pedido,   
            //dishesList: data.lista_platos.map((dishesList:{ [key: string]: unknown }) => new DishesList(dishesList)),
            totalOrder: data.total_pedido,  
            paymentMethod: data.metodo_pago,
        };
    }
}
