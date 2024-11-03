import { dbClient } from "@/lib/db";
import { cache } from "react";

class OrdersRepository {
    getOrdersList = cache(
        () : Promise<OrderListElement[]> => dbClient.order.findMany()
    );

    createOrderElement = (
        command: CreateListElementCommand,
      ): Promise<OrderListElement> => {
        return dbClient.order.create({
          data: command,
        });
    };
    deleteOrderElement = (command: DeleteListElementCommand) => {
        return dbClient.order.delete({  
          where: { id: command.id },
        });
    };
}

export const ordersRepository = new OrdersRepository();
