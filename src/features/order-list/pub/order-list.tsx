import { revalidatePath } from "next/cache";
import { ordersRepository } from "../orders.repository";
import { OrderItem } from "../ui/order-item";

export async function OrdersList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const ordersList = await ordersRepository.getOrdersList();

  const hanldeDeleteAction = async (courseId: number) => {
    "use server";

    await ordersRepository.deleteOrderElement({ id: courseId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {ordersList.map((order) => (
        <OrderItem
          key={order.id}
          order={order}
          onDelete={hanldeDeleteAction.bind(null, order.id)}
        />
      ))}
    </div>
  );
}