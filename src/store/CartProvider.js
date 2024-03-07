


import React, { useReducer } from 'react'
import CartContext from './CartContext'

let data = [
  {id:"c1", name:"Cadbary", desc: "Milk Chocolate", price: 50},
  {id:"c2", name:"Kit Kat", desc: "White Chocolate", price: 70},
  {id:"c3", name:"Amul Choco", desc: "Milk Chocolate", price: 60},
  {id:"c4", name:"Snickers", desc: "Dark Chocolate", price: 80},
  {id:"c5", name:"Cadbary", desc: "Dark Chocolate", price: 40},
]

const cartReducer = (state, action) => {

  console.log(action);

  if(action.type === "ADD" ){

    if(+action.item.price > 0 && +action.item.name.length > 0){
      return [ action.item, ...state];
    }
    
    return [...state];
  }

  return data;
}

const CartProvider = (props) => {
    

    const [state, cartDispatch] = useReducer( cartReducer, data )

    const addItemHandler = (item) => { 
       cartDispatch({type:"ADD", item : item})
      };

    const dataContext =
    { 
        itemData: state ,
        addItem : addItemHandler,
    }
  return (
    <CartContext.Provider value = {dataContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;