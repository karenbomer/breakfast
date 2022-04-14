// == Import
import Field from 'src/components/Field';
import React, { useState } from 'react';
import remove from './images/remove.png';
import verifie from './images/verifie.png';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

import './styles.scss';


// == Composant
const Checkout = () => {
  const currentAdress = useSelector((state) => state.currentAdress);

  let tempsdattente = 25
  var now = new Date();
  let heure = now.getHours();
  let minutes = now.getMinutes() + tempsdattente;
  if(minutes > 60){
    heure = heure + 1;
    minutes = (tempsdattente + now.getMinutes()) - 60
  }
  

  let totalProduit = 30;
  let shipping = 3.50;
  let totalCommande = totalProduit + shipping;

  const [popUp, setpopUp] = useState("nopopup");

  return (
  <div className='Checkout-Checkout'>
    <div className='Checkout-infoPerso'>
      <div className='Checkout-verif'>vérification d'adresse : </div>
      <div className='Checkout-ville' >{currentAdress}</div>
      <div className='Checkout-checkbox'>
        <label>
          <input type="checkbox" />
            Click and collect
        </label>
      </div>

      < Field 
      identifier="info-livreur"
      placeholder=""
      label="Information pour le livreur" />

      < Field 
      identifier="Prénom"
      placeholder=""
      label="Prénom" />

      < Field 
      identifier="Nom"
      placeholder=""
      label="Nom" />

    </div>

    <div className='Checkout-droite' >
      <div className='Checkout-Total'>
        <div className='Checkout-ligne' >Commande</div> 
        <div className='Checkout-ligne' >Shipping</div>
        <div className='Checkout-Finalprice'>Total</div>
        <div className='Checkout-btnPayer' onClick={() => setpopUp('popup')}>PAYER</div>
      </div>
        
      <div className='Checkout-Totaux'>
        <div className='Checkout-ligne' >30</div>
        <div className='Checkout-ligne' >3.50</div>
        <div className='Checkout-Finalprice'>{totalCommande}€</div>
      </div>
    </div>
    
    <div className='lapopup' >
    <div className={popUp}>

        <div className='Checkout-btnEchap' ><NavLink to="/checkout" onClick={() => setpopUp('nopopup')}>x</NavLink></div>
        <div className='Checkout-confirmation'>État de la commande : </div>
        <div className='Checkout-etat'>Confirmé !</div>
        <div>
        <img className='Checkout-icone' src={verifie} alt="verifie" />
        </div>
        <div className='Checkout-heure' >commande prête pour :</div>
        <div className='Checkout-time' >{heure} : {minutes} h</div>
      </div>
    </div>

      
  </div>
  );
};

// == Export
export default Checkout;




//Mathys
