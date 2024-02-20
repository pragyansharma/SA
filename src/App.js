import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RightComponent from './components/RightComponent';
import MiddleComponent from './components/MiddleComponent';
import BottomComponent from './components/BottomComponent';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/right">Right Component</Link>
            </li>
            <li>
              <Link to="/middle">Middle Component</Link>
            </li>
            <li>
              <Link to="/bottom">Bottom Component</Link>
            </li>
          </ul>
        </nav>

        {/* Route components */}
        <Route path="/right" component={RightComponent} />
        <Route path="/middle" component={MiddleComponent} />
        <Route path="/bottom" component={BottomComponent} />

        {/* Layout Components */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <RightComponent />
          <MiddleComponent />
          <BottomComponent />
        </div>
      </div>
    </Router>
  );
}

export default App;
