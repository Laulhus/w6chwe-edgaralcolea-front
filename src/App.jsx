import React from "react";

function App() {
  return (
    <div className="container-fluid">
      <div className="header">
        <ul className="nav row align-items-center justify-content-center navbar__list">
          <li className="col-4 nav-link navbar__icon">Test</li>
          <li className="col-4 nav-link navbar__icon">Test</li>
          <li className="col-4 nav-link navbar__icon">Test</li>
        </ul>
        <div className="main row justify-content-center align-items-center">
          <div className="grid col-12">
            <ul className="col-3 robot-list list-unstyled">
              <li className="list-item robot-card">Test Robot</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
