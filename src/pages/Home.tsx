import React, { useCallback } from 'react';
import '../App.css';
import '../scss/app.scss';
import { useSelector} from 'react-redux';

import {CardBlock, Sort, Pagination, Categories,Search} from '../scss/components'
import Skeleton from '../scss/components/Skeleton/Skeleton.tsx';

import qs from 'qs';
import { sortItems } from '../scss/components/Sort/Sort.tsx';
import { useNavigate } from 'react-router';
import {useAuth} from '../hooks/useAuth.ts'


import { useAppDispatch } from '../redux/store.ts';
import { RootState } from '../redux/store.ts';
import { fetchClother } from '../redux/clotherItems/actions.ts';
import { setCategoryId, setFilters, setPageCount } from '../redux/filters/slice.ts';
import { Status } from '../redux/clotherItems/types.ts';




export const Home: React.FC = () => {
    const isMounted = React.useRef(false);
    const isSearch = React.useRef(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const searchValue = useSelector((state:RootState) => state.filter.searchValue);

    const status = useSelector((state:RootState) => state.clother.status);

    const clothers  = useSelector((state:RootState) => state.clother.items);

    const { categoryId, sort, page } = useSelector((state:RootState) => state.filter);
    const sortType = sort.property;
   
    
    const fetchClothers = async () => {
        if(!isSearch.current) {
           
           

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const sortBy = sortType.replace('-','');
        const src = searchValue > '0' ? `&search=${searchValue}` : '';    
    
        
            dispatch(fetchClother({
                category,
                order,
                sortBy,
                page,
                src
            }));
            
            }
            isSearch.current = false;
        }
  
    const onChangeCategory = useCallback((i:number) => {
        dispatch(setCategoryId(i));
    },[]);
    const onChangePage = (number:number) => {
        dispatch(setPageCount(number));
    }


    React.useEffect(() => {
        if (isMounted.current) {
         const queryString = qs.stringify({
             property: sort.property,
             categoryId,
             page,

         });
     
         navigate(`?${queryString}`);
     }
       isMounted.current = true;
     }, [categoryId, sort.property, page]);



    React.useEffect(() => {   
        if (window.location.search) {
           
        const params = qs.parse(window.location.search.substring(1));

        const sort  = sortItems.find((obj) => obj.property === params.property);
            
        dispatch(
            setFilters({
                searchValue: String(params.value),
                categoryId: Number(params.categoryId),
                page: Number(params.page),
                sort : sort ? sort : sortItems[0]
            })
           
        );
        isSearch.current = true;
        }
       
    }, [] )

    React.useEffect(() => {

       fetchClothers();
      
    }
, [categoryId,sort.property, searchValue, page]);


        
    const clother = clothers.filter((obj:any) => {
        if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){
            return true;
        }
        return false;

    })
    .map((obj:any,i:number) => (<CardBlock key = {obj.id}  id ={obj.id} price = {obj.price} title = {obj.title} image = {obj.image} />));
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key = {index}/>)
    return (
        <div className="container">
             <div className='imageBlock'>
            <img src="/img/winter.jpg" alt="aespa" />
            <div className='topLeft'>
            <h1 >New items this autrum</h1>
            <p>new colors is coming...</p>
            </div>
        </div>
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={(i) => onChangeCategory(i) } />
       
         <Sort value = {sort} />
         
        </div>
        <Search />
        <h2 className="content__title">All</h2>
        { status === Status.ERROR ? <div>
        <h2>Something mistake <span>😕</span></h2>
            <p>
              try to analyze your link 
            </p>
            <img height={200} width={400}  src='/img/a8783c481ad779831d4791860b748092.jpg' alt="Empty cart" />
            <br />
            <br />
            <br />
            </div> : ( <div className="content__items">{ status === Status.LOADING ? skeletons  : clother } </div>) }
            <br />
            <br />
           
            <Pagination currentPage={page} onChangePage = {onChangePage} />
      </div>
 )
}