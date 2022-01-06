import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfileCard } from './components/ProfileCard';
import { Tabs } from './components/Tabs';
import { Projects } from './pages/Projects';
import { Jobs } from './pages/Jobs';
import { Education } from './pages/Education';
import { NoMatch } from './pages/NoMatch';
import { Technologies } from './pages/Technologies';

function App() {
  return (
    <Router>
      <div className='app'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-3">
              <ProfileCard />
            </div>
            <div className="col-12 col-sm-8 col-md-9">
              <Tabs />
              <Routes>
                <Route path="/">
                  <Route index element={<Education />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="jobs" element={<Jobs />} />
                  {/* <Route path="technologies" element={<Technologies />} /> */}
                  <Route path="*" element={<NoMatch />} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
