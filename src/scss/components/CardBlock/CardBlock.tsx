import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from './CardBlock.module.scss'
import { cartSliceItem } from "../../../redux/cart/types";
import { addItem } from "../../../redux/cart/slice";

type CardBlockProps = {
    id: string,
    title: string,
    price: number,
    image: string,
   
}

export const CardBlock : React.FC <CardBlockProps> = ({id, title, price, image}) => {
    const dispatch = useDispatch();
    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(0);
    const [cartCount, setCartCount] = React.useState(0);
    const [typeNames, setTypeNames] = React.useState(['Man','Woman']);
    // @ts-ignore-next-line
    const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === id));
    const onClickCount = () => {
        setCartCount(cartCount + 1);
    }
    const addedCount = cartItem ? cartItem.count : 0;
    const onClickAdd = () => {
        const item : cartSliceItem = {
            id,
            title,
            price,
            image,
            description: '',
            type: typeNames[activeType],
            size: activeSize,
            count : 0,
            rating:0
            
        }
        dispatch(addItem(item))
    }
    return(
        <div className={styles.ItemBlockWrapper}>
             
            <div className={styles.ItemBlock}>
            <Link to={`/item/${id}`}>
                    <img
                        className={styles.ItemBlockImage}
                        src={image}
                        alt="Pizza"
                    />
                    </Link>
                    <h4 className={styles.ItemBlockTitle}>{title}</h4>
                  
                    <div className={styles.ItemBlockBottom}>
                        <div className={styles.ItemBlockPrice}>US${price}</div>
                        <div onClick={onClickAdd} className={styles.buttonAdd}>
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span onClick={onClickCount}>Add</span>
                            {addedCount > 0 &&<i>({addedCount})</i>}
                        </div>
                    </div>
                </div>
        
        </div>
        )
}