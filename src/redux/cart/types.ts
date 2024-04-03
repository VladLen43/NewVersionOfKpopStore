export type cartSliceItem ={
    id: string,
    title: string,
    price: number,
    image: string,
    count: number
    description: string,
    size: number,
    type: string,
    rating: number,
 }
 export interface cartSliceState {
    items: cartSliceItem[],
    totalPrice: number,
 }