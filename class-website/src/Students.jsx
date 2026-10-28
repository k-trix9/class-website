
const students = [
  { id: 1, name: 'Student One', trade: 'Software Development' },
  { id: 2, name: 'Student Two', trade: 'Software Development' },
  { id: 3, name: 'Student Three', trade: 'Software Development' },
  { id: 4, name: 'Student Four', trade: 'Software Development' },
  { id: 5, name: 'Student Five', trade: 'Software Development' },
];

function Students({ schoolName }) {
  return (
    <section>
      <h2>Our Students</h2>
      <p>School: {schoolName}</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Trade</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.trade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Total students: {students.length}</p>
    </section>
  );
}

export default Students;
