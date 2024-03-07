import React, { useContext, useRef } from 'react'
import style from "./EntryForm.module.css"
import CartContext from '../../../store/CartContext';

const EnrtyForm = () => {

    const nameRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();


    const ctxData = useContext(CartContext);

    const inputValueHandler = () => {

        
        let data = {
            name:nameRef.current.value,
            desc:descRef.current.value,
            price:priceRef.current.value
        }
        
        ctxData.addItem(data);

        

    }

  return (
    <>
    <div className={style.formContainer}>
        <div className={style.nameInput}>
            <label>Name</label>
            <input type="text" ref={nameRef}/>
        </div>

        <div className={style.descInput}>
        <label>Description</label>
            <input type="text" ref={descRef} />
        </div>

        <div className={style.priceInput}>
        <label>Price</label>
            <input type="number" ref={priceRef} />
        </div>
        <div className={style.addButton}>
            <button onClick={ inputValueHandler}>+Add</button>
        </div>
    </div>
    </>
  )
}

export default EnrtyForm