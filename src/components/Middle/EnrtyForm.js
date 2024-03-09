import React, { useContext, useRef, useState } from 'react'
import style from "./EntryForm.module.css"
import DataContext from '../../store/DataContext';


const EnrtyForm = () => {

    const nameRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();

    const [isEntryPresent, setIsEntryPresent] = useState(false)



    let nameInputVar  = "";
    const NameInputHandler = (e) => {
        nameInputVar = e.target.value;
    }

    const ctx = useContext(DataContext);
    console.log(ctx.itemsList);
    

    const inputValueHandler = () => {
        
        let entry = false;
        ctx.itemsList.forEach( (val) => {
            
            // console.log(val.name.toLowerCase());
            if(val.name.toLowerCase() === nameRef.current.value.toLowerCase() && val.desc.toLowerCase() === descRef.current.value.toLowerCase() && +val.price === (+priceRef.current.value) ){
                setIsEntryPresent(true);
                entry = true;
                setTimeout( ( ) => {
                    setIsEntryPresent(false);
                }, 1000)
            }
           
        })
        
        if(nameRef.current.value.length > 0 && +priceRef.current.value > 0 && !entry  ){

            
            
            let data = {
                name:nameRef.current.value,
                desc:descRef.current.value,
                price:priceRef.current.value,
                id: "c" + (Math.random()*200).toFixed(0) ,
            }
            ctx.addItemToList(data);
        }       
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
            <button onClick={ inputValueHandler} >+Add</button >
        </div>
        
    </div>
    {isEntryPresent && <div className={style.overlayContainer}>Same Entry Found</div>}
    </>
  )
}

export default EnrtyForm