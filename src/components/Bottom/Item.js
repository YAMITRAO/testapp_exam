import React, { useContext } from 'react'
import style from "./Item.module.css"
import CartContext from '../../store/CartContext'
import ItemContext from '../../store/ItemContext';

const Item = () => {
    const data = useContext(CartContext);
    const itemContextData = useContext(ItemContext);


    const add1CartHandler = ( e) => {
        let data = {
            id: e.target.id,
            quantity : 1,
        }
        itemContextData.addTocart(data)
    }

    const add2CartHandler = ( e) => {
        let data = {
            id: e.target.id,
            quantity : 2,
        }
        itemContextData.addTocart(data)
    }

    const add5CartHandler = ( e) => {
        let data = {
            id: e.target.id,
            quantity : 5,
        }
        itemContextData.addTocart(data)
    }
    
  return (
    <>
    <div className={style.itemContainer}> 
    {data.itemData.map( (val) => <div className={style.selfContainer} key= {val.id} >
            <div className={style.itemName}>{val.name}</div>
            <div className={style.itemDesc} >{val.desc}</div>
            <div className={style.itemPrice}>${val.price}</div>
            <div className={style.add1}>
                <button onClick= {add1CartHandler} id={val.id} >Add1</button>
            </div>
            <div className={style.add2}>
                <button onClick= {add2CartHandler} id={val.id}>Add2</button>
                </div>
            <div className={style.add5}>
                <button onClick= {add5CartHandler} id={val.id}>Add5</button>
            </div>
        </div>)}
        
    </div>
    </>
  )
}

export default Item