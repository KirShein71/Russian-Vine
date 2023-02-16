import React from "react";
import axios from "axios";
import Winecard from '../components/Winecard'
import Categories from "../components/Categories";
import Sort from "../components/Sort"
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redax/slices/categorySlice';
import { Link } from "react-router-dom";



function Catalog() {

    const [items, setItems] = React.useState([])
    const categoryId = useSelector((state)=>state.category.categoryId)
    const sortType = useSelector((state) => state.sort.sort.sortProperty)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [isLoading, setIsLoading] = React.useState(true)
    
    const dispatch = useDispatch()
    const onClickCategory = (i) => {
        dispatch(setCategoryId(i));
    }
    

    React.useEffect(()=>{
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortType.replace('-', '');
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const axiosData = async ()=>{
            try {
                const res = await axios.get(`https://63e38111c919fe386c07dffa.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`)
                    setIsLoading(false);
                    setItems(res.data)
            } catch {
                alert('error')
            }
        }
            axiosData()
    }, [categoryId, sortType, currentPage])

    return(
        <div className="catalog">
            <div className="container">
                <h3 className="catalog__title">Все вина</h3>
                <div className="catalog__top">
                    <Categories value={categoryId} onClickCategory={onClickCategory}/>
                    <Sort />
                </div>
                {isLoading ? <Loading/> : 
                <div className="catalog__content">
                    
                    {items.map((obj)=>(
                        <Link to={`/preview/${obj.id}`}>
                            <Winecard  {...obj}/>
                        </Link>
                    ))}
                </div>}
                <Pagination onChangePage={(number) => setCurrentPage(number)} />
               
            </div>
        </div>
    )
}

export default Catalog;