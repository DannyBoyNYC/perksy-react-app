import React from 'react';

import Button from '~/components/button';
import List from '~/components/list';
import Navigation from '~/components/navigation';
import ProgressBar from '~/components/progress-bar';
import './styles.scss';

const fixture = {
  campaigns: [
    'Alcohol Consumption Report',
    'Morning Shows Stack',
    'Grocery Stack'
  ],
  upcoming: [],
  responses: [
    {
      title: 'Job Hunt Stack',
      count: 12294,
      total: 20000,
      shouldShowPercentage: true
    },
    {
      title: 'Perksy Rewards Questions',
      count: 11821,
      total: 20000,
      shouldShowPercentage: true
    },
    {
      title: 'College Athletes',
      count: 2923,
      total: 20000,
      shouldShowPercentage: true
    },
    {
      title: 'NEA Test',
      count: 136,
      total: 1000,
      shouldShowPercentage: true
    },
    {
      title: 'High School Athletes',
      count: 2653,
      total: 20000,
      shouldShowPercentage: true
    }
  ],
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
      icon: <i className="icon fas fa-cog" />,
      text: 'Settings',
      url: '#'
    },
    {
      icon: <i className="icon fas fa-sign-out-alt" />,
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
        <div className="campaign-graph" />
        <div className="campaign-responses">
          <p>Total Campaign Responses</p>
          {fixture.responses.map((props, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ProgressBar.Percentage {...props} key={index} />
          ))}
        </div>
        <div className="campaign-lists">
          <div className="campaign-list">
            <p>Recently Ended Campaigns</p>
            <List.Unordered items={fixture.campaigns} />
          </div>
          <div className="campaign-list">
            <p>Upcoming Campaigns</p>
            <List.Unordered items={fixture.upcoming} />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Dashboard;
