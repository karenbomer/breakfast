// == Import
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from 'src/actions/actions';
import * as BsIcons from "react-icons/bs";

// == Composant
const NavBarMobile = () => {
  // Récupère état side menu
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  return (
    <nav className={sidebar ? 'navbar navbar-mobile active' : 'navbar navbar-mobile'}>
      <div className="wrapper-menu">
        <h2 className="title-side-menu">BreakFast</h2>
        <BsIcons.BsXLg className="icon-close" onClick={() => {
          // Ferme le menu au clic sur la croix
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}/>
      </div>
      <ul className="list-navbar">
        <li><NavLink to='/' className="nav-link nav-link-home" onClick={() => {
          // Ferme le menu au clic sur le lien
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}><BsIcons.BsFillHouseDoorFill  className="icon-sidebar"/>Accueil</NavLink></li>
        <li><NavLink to='/formulas' className="nav-link nav-link-formulas" onClick={() => {
          // Ferme le menu au clic sur le lien
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}><BsIcons.BsFillCalendarFill  className="icon-sidebar"/>Formules</NavLink></li>
        <li><NavLink to='/blog' className="nav-link nav-link-blog" onClick={() => {
          // Ferme le menu au clic sur le lien
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}><BsIcons.BsFillBookFill  className="icon-sidebar"/>Blog</NavLink></li>
        <li><NavLink to='/about' className="nav-link nav-link-about" onClick={() => {
          // Ferme le menu au clic sur le lien
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}><BsIcons.BsInfoCircleFill  className="icon-sidebar"/>A propos</NavLink></li>
        <li><NavLink to='/contact' className="nav-link nav-link-contact" onClick={() => {
          // Ferme le menu au clic sur le lien
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}><BsIcons.BsEnvelopeFill  className="icon-sidebar"/>Contact</NavLink></li>
      </ul>
      <div className="box-account">
        <NavLink to='/login'  onClick={() => {
          // Ferme le menu au clic sur le lien
          const action  = toggleSidebar(!sidebar);
          dispatch(action);
        }}>
          <BsIcons.BsPersonCircle className="icon-account"/>
        </NavLink>
        <BsIcons.BsBoxArrowRight className="icon-logout"/>
      </div>
    </nav>
  );
}

// == Export
export default NavBarMobile;
