import React, { useState, useEffect } from 'react';
import { data } from '../data/data';
import ItemList from './ItemList';
// import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const listProducts = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(data);
            },3000);
        })

        listProducts.then((data) => {
            setProducts(data);
            setLoading(false);
        })
    },[]);

    return (
        <div>
            {loading ? <p>Loading...</p> : <ItemList products={products} />}
        </div>
    );
}

export default ItemListContainer;