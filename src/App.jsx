import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import { ProfileCard } from './components/ProfileCard';
import { Projects } from './components/Projects';
import { Jobs } from './components/Jobs';
import { Education } from './components/Education';

function App() {
  return (
    <Router>
      <div className='app'>
        <div className="container">
          <ProfileCard />
          <Jobs />
          <Education />
          <Projects />
        </div>
      </div>
    </Router>
  );
}

export default App;
