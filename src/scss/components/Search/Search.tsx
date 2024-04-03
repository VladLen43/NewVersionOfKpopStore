import React from 'react';
import styles from './Search.module.scss'
// @ts-ignore-next-line
import debounce from 'lodash.debounce';
// @ts-ignore-next-line

import { useDispatch, useSelector } from'react-redux';
import { setSearchValue } from '../../../redux/filters/slice';

export const Search: React.FC = () => {
    const [value, setValue] = React.useState('')
    const inputRef = React.useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    // @ts-ignore-next-line
    const searchValue = useSelector(state => state.filter.searchValue);
    const onClickRef = () => {
        setSearchValue('')
        setValue('');
        inputRef.current?.focus();
    }
    const updateSearchValue = React.useCallback(
        debounce((str:string)  => {
            dispatch(setSearchValue(str));
        }, 500),
        [],
    )
    const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
       
    }
    return(
        <div className={styles.main}>
  
         
            <input ref={inputRef} value={value} onChange={onChangeInput} placeholder='Search some items...' className={styles.root} type='text'></input>
            {searchValue && 
            <svg onClick={onClickRef} className={styles.close} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/> </g>
            </svg>
}

        </div>
    )
}