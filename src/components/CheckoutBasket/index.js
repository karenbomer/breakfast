// == Import
import './styles.scss';

import IndividualProduct from 'src/components/IndividualProduct'
import { NavLink } from "react-router-dom";
//import React, {useEffect} from 'react';
import { productData } from 'src/data/data';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getBasket } from '../../basketFunctions';



// == Composant
const CheckoutBasket = () => {

  const shoppingBasketList = useSelector((state) => state.shoppingBasket)
  console.log(shoppingBasketList)
  
  return (
    <div className='Basket-Basket'>
      <div className='Basket-products'>
            {shoppingBasketList.map((item) => (
            <IndividualProduct
              key={Math.random().toString(36).substr(2, 9)}
              id={item.id}
              img={item.picture}
              prix={item.price}
              name={item.name}
              count={item.quantity}
            />
          ))}

      </div>

      <div className='Basket-PriceListe'>
        <div>
          <div className='Basket-trait'>
            {shoppingBasketList.map((item) => (
              <div className='Basket-ligne'>
                <div className='Basket-productName'>{item.name}</div>
                <div className='Basket-productPrice'>{item.price * item.quantity}</div>
              </div>
              ))}
          </div>
          <div className='Basket-paye'>
            <NavLink to="/checkout" className='Basket-btnPayer'>PAYER</NavLink>
            <div className='Basket-totalPrice'>30€</div>
          </div>
        </div>
      </div>
    </div>
    
  );};


// == Export
export default CheckoutBasket;



//Mathys
