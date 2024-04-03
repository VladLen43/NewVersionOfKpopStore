import React from 'react'
import {useParams, useNavigate } from 'react-router'
import axios from 'axios';
import styles from './ItemPage.module.scss'


export const ItemPage: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    console.log(params);
    const [ inf , setInfo] = React.useState<{
        image: string,
        title: string,
        price: number,
        description: string,
    }>();
    React.useEffect(() => {
        const fetchPersonalInfo = async () => {
            try {
              const {data} = await axios.get('https://651310f58e505cebc2e98800.mockapi.io/items/' + params.id);
                setInfo(data)
            } catch (error) {
                alert('This item does not exist');
                navigate('/');
                console.log(error);
            }
         
        }
        fetchPersonalInfo();
    }, [])
      
    if (!inf) {
        return <div>Loading...</div>
    }
    
    return (
        
        <div className={styles.mainContainer}>
            <div className={styles.container}>
            <h1 className={styles.containerTitle}>{inf.title}</h1>
            <div className={styles.containerImage}>
                <img src={inf.image} alt={inf.title} />
            </div>
        
            <div className={styles.containerBottomInfo}>
                
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.containerSecond}>
                <h1>Description:</h1>
                <p>{inf.description}</p>
                <h2 className={styles.price}>Price: {inf.price} $</h2>
            </div>
        </div>
    )
      
}