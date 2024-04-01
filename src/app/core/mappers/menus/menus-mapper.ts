import { Ingredients, Menu } from '@interfaces/menus/menus';
import { Ingrediente, MenusResponse } from '@model/menus/menus-response';

export class MenusMapper {
    static map(data: MenusResponse): Menu {
        return {
            id: data.id,
            dishName: data.nombre_plato,
            dishDescription: data.descripcion_plato,
            idCategory: data.id_categoria,
            salePrice: data.precio_venta,
            productionCost: data.costo_produccion,
            //ingredients: data.ingredientes.map((ingredient:{ [key: string]: unknown }) => new Ingredients(ingredient)),
            allergens: data.alergenos,
            dishImage: data.imagen_plato,
        };

    }

    static toJson(data: Menu): MenusResponse {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            alergenos: data.allergens,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            imagen_plato: data.dishImage,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            nombre_plato: data.dishName,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            descripcion_plato: data.dishDescription,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            id_categoria: data.idCategory,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            precio_venta: data.salePrice,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            costo_produccion: data.productionCost,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            id: data.id
        };
    }

}