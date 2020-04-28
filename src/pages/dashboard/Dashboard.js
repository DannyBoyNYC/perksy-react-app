import React from 'react';

import Button from '../../components/button';
import Navigation from '../../components/navigation';
import './styles.scss';

const fixture = {
  logoUrl:
    'https://staging.getperksy.com/assets/perksy_white_logo-b9bfe71f9f985850ff87a32089ad4a2f80480657b0b5e9e4045dfb91779b9a19.png',
  links: [
    {
      text: 'Dashboard',
      url: '#'
    },
    {
      text: 'Campaigns',
      url: '#'
    },
    {
      text: 'Analytics',
      url: '#'
    }
  ],
  ultilityLinks: [
    {
      iconClass: 'fas fa-cog',
      text: 'Settings',
      url: '#'
    },
    {
      iconClass: 'fas fa-sign-out-alt',
      text: 'Logout',
      url: '#'
    }
  ]
};

/**
 * The Dashboard page for the web app.
 */
const Dashboard = () => (
  <div className="page page--dashboard">
    <aside className="side-bar">
      <img className="logo" src={fixture.logoUrl} alt="Perksy white logo" />
      <Navigation.Vertical links={fixture.links} />
      <Navigation.Vertical links={fixture.ultilityLinks} />
    </aside>
    <main className="main-content">
      <div className="title-bar">
        <h1 className="title">Today</h1>
        <Button.Primary>+ New Campaign</Button.Primary>
      </div>
      <div className="body">
        <p>Recently Ended Campaigns</p>
      </div>
    </main>
  </div>
);

export default Dashboard;
