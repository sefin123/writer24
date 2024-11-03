import { CreateOrderForm } from "@/features/order-list/pub/create-order-form";
import { OrdersList } from "@/features/order-list/pub/order-list"

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-8">
      <h1 className="text-3xl mb-2">Orders</h1>
      <CreateOrderForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />
      <OrdersList revalidatePagePath="/" />
    </main>
  );
}
