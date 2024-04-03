import { cartSliceItem } from "../cart/types";

export const calcTotalPrice = (items: cartSliceItem[]) => {
    return items.reduce((sum, item) => item.price * item.count + sum, 0);
}