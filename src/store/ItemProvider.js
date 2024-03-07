
import React, { useContext, useReducer } from 'react'
import ItemContext from './ItemContext'
import CartContext from './CartContext';




const itemReducer = (state, action) => {
    console.log(action);
    if(action.type === "ADD"){
        console.log(action.value);
        const UpdatedArray = state.cartItems.concat(action.value.quantity);
        console.log(UpdatedArray);

        return {
            cartContextData : state.cartContextData,
            cartItems : UpdatedArray,
        }
    }
    return  state;
}


const ItemProvider = (props) => {

    const cartdata = useContext(CartContext);
    const defaultState = {
        cartContextData : cartdata.itemData,
        cartItems : [],
    }

    const [state, itemDispatch] = useReducer( itemReducer, defaultState );


    const addTocartHandler = (data ) => { 
        
        itemDispatch( {type:"ADD", value : data })
    }
    const removeFromCartHandler = ( ) => {}
    
    
    const buyingData = {
        TotalItem : state.cartItems,
        addTocart : addTocartHandler,
        removeFromCart : removeFromCartHandler,
    }

  return (
    <ItemContext.Provider value = { buyingData }>{props.children}</ItemContext.Provider>
  )
}

export default ItemProvider