import Button from "./button";

const ContactForm = () => {
  return (
    <form id="contact-form" action="" method="post">
      <fieldset className="form-first-row">
        <input
          className="contact-field"
          name="name"
          type="text"
          id="name"
          placeholder="Full Name"
          required
        ></input>

        <input
          className="contact-field"
          name="email"
          type="email"
          id="email"
          placeholder="E-mail"
          required
        ></input>
      </fieldset>
      <fieldset className="form-second-row">
        <textarea
          id="form-text-area"
          className="contact-field"
          name="message"
          id="message"
          placeholder="Your Message"
          rows="6"
          required
        ></textarea>
      </fieldset>
      <fieldset className="form-third-row">
        <Button buttonContent="Send It" class="button-red" />
      </fieldset>
    </form>
  );
};

export default ContactForm;
