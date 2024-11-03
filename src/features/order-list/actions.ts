"use server";

import { revalidatePath } from "next/cache";
import { ordersRepository } from "./orders.repository";

export const createOrderAction = async (
  command: CreateListElementCommand,
  revalidatePagePath: string,
) => {
  await ordersRepository.createOrderElement(command);
  revalidatePath(revalidatePagePath);
};