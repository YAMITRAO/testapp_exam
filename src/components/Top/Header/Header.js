import React, { useContext } from 'react'
import style from "./Header.module.css"
import ItemContext from '../../../store/ItemContext'

const Header = () => {

  const itemContextData = useContext(ItemContext);
  // console.log(itemContextData);

  const totalCartItem = itemContextData.TotalItem.length;
  console.log(totalCartItem);
  // console.log(totalCartItem); 
  return (
    <>
    <div className={style.headerContainer}>  
    <div className={style.logo}>MyChocoApp</div>
     <button className={style.cart}>
        <div className={style.cartIcon}>$</div>
        <div className={style.cartName}>Cart</div>
        <div className={style.cartCount}>{totalCartItem}</div>
     </button>
    </div>
  
    </>
  )
}

export default Header