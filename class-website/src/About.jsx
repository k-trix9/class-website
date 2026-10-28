
function About({ schoolName }) {
  return (
    <section>
      <h2>About Our Class</h2>

      <p>
        This class website provides information about students,
        our school, and the subjects we study.
      </p>

      <p>
        {schoolName} offers learning opportunities in the
        Software Development trade.
      </p>

      <h3>Skills and Subjects We Learn</h3>

      <ul>
        <li>Front-End Web Development</li>
        <li>Back-End Application Development</li>
        <li>Database Design and Development</li>
        <li>Software Testing and Quality Assurance</li>
        <li>Programming with JavaScript and ReactJS</li>
      </ul>

      <h3>Our Goal</h3>
      <p>
        Our goal is to develop the knowledge and practical
        skills required to build reliable software applications.
      </p>
    </section>
  );
}

export default About;
