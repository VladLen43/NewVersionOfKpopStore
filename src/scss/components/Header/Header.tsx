import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "../Search/Search.tsx";
import { useDispatch, useSelector } from "react-redux";
import styles from './header.module.scss'
import { RootState, useAppDispatch } from "../../../redux/store.ts";
import { useAuth } from "../../../hooks/useAuth.ts";
import { removeUser } from "../../../redux/userInfo/slice.ts";
import { useAppSelector } from "../../../redux/userInfo/reduxhooks.ts";




export const Header: React.FC = () => {
   
    const {items} = useSelector((state:RootState) => state.cart);
    const totalPrice = useSelector((state:RootState) => state.cart.totalPrice);
    const totalCount = items.reduce((sum:number, item:any)=> sum + item.count, 0);
    const location = useLocation();
    //@ts-ignore
    const { users } = useSelector((state:RootState) => state.users);
    const {isAuth, email, } = useAuth();
    const dispatch = useAppDispatch();

    const isMounted = React.useRef(false)
    React.useEffect(() => {
        if(isMounted.current) {
        const json = JSON.stringify(items);
        localStorage.setItem('cart', json);
        console.log(json)
            }
        isMounted.current = true;
    
    },[items, totalPrice]);
   
   
    return(
        <div className={styles.header}>
            <div className={styles.container}>
                <Link to="/" >
                <div className={styles.headerLogo}>
                    <img width="38" src="/img/icon.png" alt="Pizza logo" />
                    <div style={{margin:"0"}}>
                        <h1>StreetWearShop</h1>
                        <p>best merch from your favorite groups</p>
                    </div>
                </div>
                </Link>
          <div className={styles.headerCart}>
                    { location.pathname === '/cart' ? '' : (
                    <Link to='/cart'>
                    <div className={styles.cartButton}>
                        <span className={styles.priceSpan}>{totalPrice}  $</span>
                        <div className={styles.vertLine}></div>    
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                                stroke="white"
                                stroke-width="1.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                                stroke="white"
                                stroke-width="1.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                                stroke="white"
                                stroke-width="1.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span className={styles.spanCount}>{totalCount}</span>
                        
                    </div>
                    
                    </Link>
                    
                    )}
                
                </div>
                
            </div>
            
        </div>
        
    )
}