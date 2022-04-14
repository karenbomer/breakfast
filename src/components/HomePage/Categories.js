// == Import
import './styles.scss';
import ImgAmoureux from './images/categories/amoureux.jpg'
import ImgAnniversaire from './images/categories/anniversaire.jpg'
import ImgBio from './images/categories/bio.jpg'
import ImgVegan from './images/categories/vegan.jpg'
import ImgEntreprise from './images/categories/entreprise.jpg'

// == Composant
const Categories = () => {
  const scrollToTop = () =>{
    // Remonter scroll de la page au clic sur une catégorie
    document.querySelector('.homepage').scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
    // Focus la barre d'adresse 
    /* document.querySelector('.form-adresse-input').focus(); */
  };
  

  return (
    <div className="categories">
      <h2 className="title-category">Catégories</h2>
      <ul className="list-categories">
        <li className="category" onClick={scrollToTop}>
          <div className="background-div">
            <p>Amoureux</p>
          </div>
        </li>
        <li className="category" onClick={scrollToTop}>
          <div className="background-div">
            <p>Anniversaire</p>
          </div>
          </li>
        <li className="category" onClick={scrollToTop}>
          <div className="background-div">
            <p>Bio</p>
          </div>
        </li>
        <li className="category" onClick={scrollToTop}>
          <div className="background-div">
            <p>Vegan</p>
          </div>
          </li>
        <li className="category" onClick={scrollToTop}>
          <div className="background-div">
            <p>Entreprise</p>
          </div>
          </li>
      </ul>
      
    </div>
  );
};

// == Export
export default Categories;
