
function Contact({ schoolName, onNavigate }) {
  return (
    <section>
      <h2>Contact Us</h2>

      <p>School: {schoolName}</p>
      <p>Location: Nyange Sector, Ngororero District, Rwanda</p>

      <p>
        Email: <a href="mailto:yourname@example.com">
          yourname@example.com
        </a>
      </p>

      <button onClick={() => onNavigate('Home')}>
        Return to Home
      </button>
    </section>
  );
}

export default Contact;
