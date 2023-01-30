import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import { ProfileCard } from './components/ProfileCard';
import { Projects } from './components/Projects';
import { Jobs } from './components/Jobs';
import { Education } from './components/Education';
import { Technologies } from './components/Technologies';

function App() {
  return (
    <Router>
      <div className='app'>
        <ProfileCard />
        <div className="container">
          <Jobs />
          <Education />
          <Projects />
          <Technologies />
        </div>
      </div>
    </Router>
  );
}

export default App;
