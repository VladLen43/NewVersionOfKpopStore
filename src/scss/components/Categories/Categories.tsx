import React from "react";
import styles from './Categories.module.scss'



type CategoriesProps = {
    value: number,
    onChangeCategory: (i:number) => void, 
}

export const Categories: React.FC<CategoriesProps> = React.memo(({value,onChangeCategory}) => {

    const categories = [
        'All', 'Kpop Clothes','KDrama Clothes','Accessories','Korean Clothes','Outfits'
    ]

    return(
        <div className="categories">
            <ul>
                {
                    categories.map((val, i) => (
                    <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
                        {val}
                      
                    </li>
                    ))
                }
            </ul>
               
         
        </div>
    )
})