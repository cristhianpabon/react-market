import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

const CartProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const getItem = (itemId) => {
        return products.find(obj => obj.id === itemId);
    }   
    
    const addItem = (item, quantity) => {
        if(item && isInCart(item.id)){
            console.log("Item is existing in products");
            return;
        }
        setProducts([...products,{item, quantity}]);
    }
    
    const removeItem = (itemId) => {
        const newProducts = products.filter( product => product.item.id !== itemId);
        setProducts(newProducts);
    }     
    
    const clear = () => {
        setProducts([]);
    }     
    
    const isInCart = (itemId) => {
        return products.some( product => product.id === itemId);
    }   

    return (
        <CartContext.Provider value={{
            addItem,
            products,
            removeItem,
            clear,
            isInCart,
            getItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
