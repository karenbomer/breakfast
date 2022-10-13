// == Import
import './styles.scss';


const Contact = () => {

  return (
    <div className="contact">
      <h1 id="contact-page__title">Contact</h1>

      <div className ="contact-form">
        <form className="contact-form__container">
          <label className="contact-form__label">
            Nom
            <input className="form-input" type="text" name="name" />
          </label>
          <label className="contact-form__label">
            Email
            <input className="form-input" type="text" name="name" />
          </label>
          <label className="contact-form__label" for="message">
            Message
            <textarea id="message" type="text" name="message"></textarea>
          </label>
          <input id="submit-form__button" type="submit" value="Envoyer" />
        </form>
      </div>
      

    </div>
  );
}

// == Export
export default Contact;
