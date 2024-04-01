export class OrdersResponse {
    id:            number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_pedido:  string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    hora_pedido:   string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    id_cliente:    number;
    mesa:          number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    estado_pedido: string;
    //lista_platos:  ListaPlatos[];
    // eslint-disable-next-line @typescript-eslint/naming-convention
    total_pedido:  number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    metodo_pago:   string;

    constructor(data: { [key: string]: unknown }) {
        this.id = data['id'] as number;
        this.fecha_pedido = data['fecha_pedido'] as string;
        this.hora_pedido = data['hora_pedido'] as string;
        this.id_cliente = data['id_cliente'] as number;
        this.mesa = data['mesa'] as number;
        this.estado_pedido = data['estado_pedido'] as string;
        //this.lista_platos = data['lista_platos'].map((lista_platos:{ [key: string]: unknown }) => new ListaPlatos(lista_platos));
        this.total_pedido = data['total_pedido'] as number;
        this.metodo_pago = data['metodo_pago'] as string;
    }   
}

export class ListaPlatos {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    id_menu:  number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    cantidad: number;

    constructor(data: { [key: string]: unknown }) {
        this.id_menu = data['id_menu'] as number;
        this.cantidad = data['cantidad'] as number;
    }
}


