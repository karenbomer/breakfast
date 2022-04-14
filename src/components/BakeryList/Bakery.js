// == Import
import './styles.scss';
import Heart from 'src/components/Heart/Heart';
import StarRating from 'src/components/StarRating/StarRating';
// == Composant
const Bakery = ({ img, time, name, delivery_fees, rating }) => {
    console.log(rating);

    return (
        <div  className="bakery-list-bakery" onClick={() => {
            console.log('test')
          }}>
            <img className="bakery-list-bakery__img" src={img} alt="croissant" />
            <p className="bakery-list-bakery-deliverytime">{time} min</p>
            <div className="bakery-list-bakery-infos">
                <div>
                    <h2 className="bakery-list-bakery-name">{name}</h2>
                    <p className="bakery-list-bakery-deliverycost">Frais de livraison : {delivery_fees}€</p>
                    <div className="bakery-list-rating">
                        <StarRating value={rating}/>
                    </div>
                </div>
                <div className="bakery-list-like">
                    <Heart />
                </div>
            </div>
            
        </div>
    );
}

// == Export
export default Bakery;
