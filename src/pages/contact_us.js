import ContactForm from "../components/contact_form";

const ContactUs = () => {
  return (
    <div id="contact_us" className="contact-us">
      <div id="map">
        <iframe
          title="mylocation"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.089677229253!2d80.24521611430437!3d12.966113218508095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d0f58d44ec1%3A0xa98574ad92cba775!2sLittle%20Goa!5e0!3m2!1sen!2str!4v1615311380758!5m2!1sen!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div id="contact_form_container">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
