import React from 'react';

import GitHub from '../components/GitHub';

import me from '../assets/img/logo.svg';

const IndexPage = () => (
  <div className="IndexPage">
    <header className="py-5">
      <div className="container">
        <h1 className="mb-3">
          <img src={me} alt="ElectricMagnetic" className="logo" />
        </h1>
        <p className="mb-0">
          <a href="https://electricmagnetic.net">Main Website</a>
        </p>
      </div>
    </header>
    <main className="py-5">
      <div className="container">
        <h2 className="text-center h4 mb-4">Current projects</h2>
        <GitHub />
      </div>
    </main>
  </div>
);

export default IndexPage;
