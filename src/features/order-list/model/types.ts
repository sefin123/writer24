type OrderListElement = {
    id: number;
    name: string;
    description: string;
}

type CreateListElementCommand = {
    name: string;
    description: string;
}

type DeleteListElementCommand = {
    id: number;
}