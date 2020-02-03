import React from 'react';

import GitHub from '../components/GitHub';

import me from '../assets/img/logo.svg';

const IndexPage = () => (
  <div className="IndexPage">
    <header className="py-5">
      <div className="container">
        <h1 className="mb-4">
          <img src={me} alt="ElectricMagnetic" className="logo" />
        </h1>
        <h2>Open Source Projects</h2>
      </div>
    </header>
    <main className="py-5">
      <div className="container">
        <GitHub />
      </div>
    </main>
    <footer className="py-5">
      <div className="container">
        <p>
          &copy; <a href="https://electricmagnetic.net">ElectricMagnetic</a>{' '}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  </div>
);

export default IndexPage;
