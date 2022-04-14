// == Import
import './styles.scss';

import flash from 'src/components/About/images/flash.jpg'
import superman from 'src/components/About/images/Superman.jpg'
import batman from 'src/components/About/images/batman.jpg'
import harley from 'src/components/About/images/harley.jpg'
import wonder from 'src/components/About/images/wonderWoman.jpg'




// == Composant
const About = () => (
  <div className="about">
    <div className='front' >
    <h1>Team Front :</h1>
      <div className='Personne' >
        <img  src={wonder}  alt='pp'/>
        <p>Karen Bomer</p>
        <p>role</p>
      </div>
      <div className='Personne' >
        <img  src={superman}  alt='pp'/>
        <p>Loris Beranger</p>
        <p>role</p>
      </div>
      <div className='Personne' >
        <img  src={flash}  alt='pp'/>
        <p>Mathys Vitiello</p>
        <p>role</p>
        </div>
      </div>

      <div className='back' >
      <h1>Team Back :</h1>
      <div className='Personne' >
        <img  src={harley}  alt='pp'/>
        <p>Alexandra Gonçalves</p>
        <p>role</p>
      </div>
      <div className='Personne' >
        <img  src={batman}  alt='pp'/>
        <p>Anthony Ouzhènes</p>
        <p>role</p>
      </div>
    </div>
  </div>
);

// == Export
export default About;
