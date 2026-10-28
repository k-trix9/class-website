
function Home({ schoolName, className, onNavigate }) {
  return (
    <section>
      <h2>Welcome to Our Class Website</h2>

      <p>Welcome to {schoolName}!</p>

      <p>Class: {className}</p>

      <p>
        This website introduces our class, our students,
        and the skills we learn in Software Development.
      </p>

      <h3>Explore Our Website</h3>

      <button onClick={() => onNavigate('About')}>
        About Our Class
      </button>{' '}

      <button onClick={() => onNavigate('Students')}>
        View Students
      </button>{' '}

      <button onClick={() => onNavigate('Contact')}>
        Contact Us
      </button>
    </section>
  );
}

export default Home;
