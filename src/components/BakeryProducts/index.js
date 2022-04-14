// == Import
import './styles.scss';
import { NavLink } from "react-router-dom";
import StarRating from 'src/components/StarRating/StarRating';
import Product from './Product/Product';
import croissant from './images/croissant.jpg';
import Heart from './images/like-button-white.png';
import RedHeart from './images/like-button-red.png';
import { useState } from 'react';


import { BiSearch } from "react-icons/bi";
import { productBakery15 } from '../../data/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BakeryProducts = () => {
  console.log(productBakery15)
  const notifySuccess = () => toast.success('Produit ajouté au panier !', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const [coeur, setcoeur] = useState(false);

  const HeartToggle = () => {
    setcoeur(!coeur)
  }

  return (
    <div className='bakery-page' >
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      <div className='bakery-bakery'>
        <div className='bakery-infos'>
          
            <img className="bakery-img" src="https://static.actu.fr/uploads/2021/12/25697-211214185946977-1.jpg" alt="croissant" />
            <div className='bakery-right-side'>
            <h2 className="bakery-name">{productBakery15.name}</h2>
            <div className='bakery-ligne-star-coeur'>
            <StarRating className='bakery-rating' />
            <img className="bakery-icone" onClick={HeartToggle} src={`${coeur ? Heart : RedHeart}`} alt="heart" />
            </div>
            <div className='bakery-address'> Ici l'address de la boulangerie</div>
            </div>
             
        </div>
      </div>

      <div className='bakery-all-products'>
        <div className='bakery-search'>
      <h2 className="bakery-products">Nos produits</h2>
      </div>
        <ul className='bakery-products-list'>
          {productBakery15.map((item) => (
            <Product
              key={Math.random().toString(36).substr(2, 9)}
              id={item.id}
              img={item.picture}
              name={item.name}
              price={item.price}
              notify={notifySuccess}
            />
          ))}
        </ul>
        <div className='basket-access' >
          <NavLink to="/basket" className='bakery-btn-to-basket'>Accéder au panier</NavLink>
        </div>
      </div>
    </div>
  );
}

// == Export
export default BakeryProducts;
