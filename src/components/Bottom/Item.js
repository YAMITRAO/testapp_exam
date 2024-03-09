import React, { useContext } from 'react'
import style from "./Item.module.css"
import DataContext from '../../store/DataContext'


const Item = () => {

    const itemsListDataCtx = useContext(DataContext);

    const itemsList = itemsListDataCtx.itemsList;

    const add1Handler = (e) => {
        let data = {
            increment: e.target.value,
            id: e.target.id,
        }
        // console.log(e.target);
        itemsListDataCtx.addItemToCart(data)
    }

    const add2Handler = (e) => {
        
        let data = {
            increment: e.target.value,
            id: e.target.id,
        }
        // console.log(e.target);
        itemsListDataCtx.addItemToCart(data)
    }

    const add5Handler = (e) => {
        let data = {
            increment: e.target.value,
            id: e.target.id,
        }
        // console.log(e.target);
        itemsListDataCtx.addItemToCart(data)
    }
    
  return (
    <>
    <div className={style.itemContainer}> 
    {itemsList.map( (val) => <div className={style.selfContainer} key= {val.id} >
            <div className={style.itemName}>{val.name}</div>
            <div className={style.itemDesc} >{val.desc}</div>
            <div className={style.itemPrice}>${val.price}</div>
            <div className={style.add1}>
                <button  id={val.id} onClick={ add1Handler } value="1">Add1</button>
            </div>
            <div className={style.add2}>
                <button  id={val.id} onClick={ add2Handler } value ="2">Add2</button>
                </div>
            <div className={style.add5}>
                <button  id={val.id} onClick={ add5Handler } value ="5">Add5</button>
            </div>
        </div>)}
        
    </div>
    </>
  )
}

export default Item