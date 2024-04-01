export interface Menu {
    id:                number;
    dishName:          string;
    dishDescription:   string;
    idCategory:        number;
    salePrice:         number;
    productionCost:    number;
    //ingredients:       Ingredients[];
    allergens:         string[];
    dishImage:         string;
}

export interface Ingredients {
    ingredientsName: string;
    amount:           number;
}
