// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from 'src/actions/actions';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// Images
import BreakFastLogo from './images/breakfast-logo-light.png'
import ShoppingBasket from './images/painier-original-color-breakfast.png'
import CupLog from './images/cup-empty-notconnected.png'
// Composants
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

const Header = () => {
  // Récupère état side menu
  const sidebar = useSelector((state) => state.sidebar);
  const shoppingBasketList = useSelector((state) => state.shoppingBasket)
  console.log(shoppingBasketList.length)
  const dispatch = useDispatch();


  const [pastille, setpastille] = useState(false);



  if ( shoppingBasketList.length === 0 ){
    if (pastille != false){
      setpastille(false);
    }
    
  }
  else {
    if (pastille != true){
      setpastille(true);
    }
  }

  return (
    <header className="header">
      <div className="header-mobile">
        <NavBarMobile />
        <div className="header-buttons">
          <div className="box-img">
          <i className={sidebar ? 'bars icon btn-menu-burger active' : 'bars icon btn-menu-burger'} onClick={() => {
            const action  = toggleSidebar(!sidebar);
            dispatch(action);
          }}></i>
          </div>
          <NavLink to='/' className="box-img"></NavLink>
          <div className="box-img">
            <NavLink to='/basket' className='wrapper-basket-icon'>
              <i className="shopping basket icon btn-basket"></i>
              <span className={pastille ? 'pastille-basket-mobile' : 'no-pastille-basket-mobile'}>{shoppingBasketList.length}</span>
            </NavLink>
            </div>
        </div>
        <h1 className="slogan">Votre petit dej en un clic</h1>
      </div>

      <div className="header-laptop">
        <div className="header-buttons">
          <div className="box-logo-slogan">
            <NavLink to='/'>
              <img src={BreakFastLogo} className="logo-breakfast"/>
            </NavLink>
            <h1 className="slogan">Votre petit dej en un clic</h1>
          </div>
          <div className="buttons-basket-log">
            <NavLink to='/basket' className="box-button-header nav-link">
              <div className='wrapper-basket-icon'>
                <img src={ShoppingBasket} className="buttons-header icon-basket" />
                <span className={pastille ? 'pastille-basket' : 'no-pastille-basket'}>{shoppingBasketList.length}</span>
              </div>
              <span className="span-btn">Panier</span>
            </NavLink>
            <NavLink to='/login' className="box-button-header nav-link">
              <img src={CupLog} className="buttons-header icon-cuplog" />
              <span className="span-btn">Connexion</span>
            </NavLink>
          </div>
        </div>
        <NavBarDesktop />
        
      </div>
    </header>
  );
}

// == Export
export default Header;
