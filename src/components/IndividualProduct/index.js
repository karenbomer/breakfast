// == Import
import './styles.scss';

import less from './images/minus.png';
import plus from './images/plus.png';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCountBasket, refreshBasket } from '../../actions/actions';
import { addToBasket, findProduct, getBasket, removeFromBasket } from '../../basketFunctions';



// == Composant
const IndividualProduct = ({id, img,  name, prix, count}) => {
  const dispatch = useDispatch();

  let TotalIndividuel = Math.round((count * prix) * 100) / 100;

  const currentProduct = findProduct(id);
  console.log(count)

  return (
    <div className="Basket-product">
      <img className="Basket-imgProduit" src={img} alt="img-croissant" />
      <div className="Basket-info">
        <div className="Basket-individual-product-name">{name}</div>
        <div className="Basket-individual-product-total-price">
          {TotalIndividuel}€
        </div>
      </div>
      <div className="Basket-quantity">
        {count}
        <div className="math">
          <img
            onClick={() => {
              removeFromBasket(currentProduct);
              let basket = getBasket();
              dispatch(refreshBasket(basket));
            }}
            className="less"
            src={less}
            alt="signe moins"
          />
          <img
            onClick={() => {
              addToBasket(currentProduct);
              let basket = getBasket();
              dispatch(refreshBasket(basket));
            }}
            className="plus"
            src={plus}
            alt="signe plus"
          />
        </div>
      </div>
    </div>
  );};


// == Export
export default IndividualProduct;



//Mathys
