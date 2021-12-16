import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfileCard } from './components/ProfileCard';
import { Tabs } from './components/Tabs';
import { Description } from './pages/Description';
import { Jobs } from './pages/Jobs';
import { Education } from './pages/Education';
import { NoMatch } from './pages/NoMatch';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <ProfileCard />
          </div>
          <div className="col-12 col-md-9">
            <Tabs />
            <Routes>
              <Route path="/">
                <Route index element={<Description />} />
                <Route path="education" element={<Education />} />
                <Route path="jobs" element={<Jobs />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
