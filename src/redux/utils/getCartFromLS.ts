import { cartSliceItem } from "../cart/types";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) as cartSliceItem[] : [];
    const totalPrice = calcTotalPrice(items);


        return {
            items,
            totalPrice,
        }

}