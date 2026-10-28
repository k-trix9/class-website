
import { useState } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Students from './Students.jsx';
import Contact from './Contact.jsx';

const schoolName = 'EAV Kivumu TSS';
const className = 'TVET Certificate IV - Software Development';

function App() {
  const [currentView, setCurrentView] = useState('Home');
  const [clickCount, setClickCount] = useState(0);

  function navigate(view) {
    setCurrentView(view);
  }

  return (
    <>
      <header>
        <h1>{schoolName}</h1>
        <p>{className}</p>
      </header>

      <nav aria-label="Main navigation">
        <button onClick={() => navigate('Home')}>Home</button>{' '}
        <button onClick={() => navigate('About')}>About</button>{' '}
        <button onClick={() => navigate('Students')}>Students</button>{' '}
        <button onClick={() => navigate('Contact')}>Contact</button>
      </nav>

      <main>
        {currentView === 'Home' && (
          <Home
            schoolName={schoolName}
            className={className}
            onNavigate={navigate}
          />
        )}

        {currentView === 'About' && (
          <About schoolName={schoolName} />
        )}

        {currentView === 'Students' && (
          <Students schoolName={schoolName} />
        )}

        {currentView === 'Contact' && (
          <Contact
            schoolName={schoolName}
            onNavigate={navigate}
          />
        )}
      </main>

      <section>
        <h2>React Event Handling</h2>
        <p>Button clicks: {clickCount}</p>
        <button onClick={() => setClickCount(clickCount + 1)}>
          Click Me
        </button>
        <button onClick={() => setClickCount(0)}>
          Reset Counter
        </button>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} {schoolName}</p>
        <p>Software Development Class Website</p>
      </footer>
    </>
  );
}

export default App;
