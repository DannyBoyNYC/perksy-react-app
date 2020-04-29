import React from 'react';

import Button from '~/components/button';
import Dropdown from '~/components/dropdown';
import List from '~/components/list';
import Navigation from '~/components/navigation';
import ProgressBar from '~/components/progress-bar';
import User from '~/components/user';
import './styles.scss';

import fixture from './data';

/**
 * The main landing page for users.
 */
const Dashboard = () => (
  <div className="page page--dashboard">
    <aside className="side-bar">
      <img className="logo" src={fixture.logoUrl} alt="Perksy white logo" />
      <User.Avatar {...fixture.user} />
      <Navigation.Vertical links={fixture.links} />
      <Navigation.Vertical
        className="navigation--utility"
        links={fixture.ultilityLinks}
      />
    </aside>
    <main className="main-content">
      <div className="title-bar">
        <h1 className="title">Today</h1>
        <Dropdown.SingleSelect defaultValue="perksy" options={fixture.brands} />
        <Button.Primary className="button--campaign">
          + New Campaign
        </Button.Primary>
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
