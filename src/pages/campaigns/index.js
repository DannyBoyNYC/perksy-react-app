import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Button from '~/components/button';
import Campaign from '~/components/campaign';
import Columns from '~/components/columns';
import Dropdown from '~/components/dropdown';
import Link from '~/components/link';
import Status from '~/components/status';
import Tabs from '~/components/tabs';
import Sticky from '~/components/sticky';

import { brands } from '~/data/homepage';
import data from '~/data/campaigns';
import Layout from '../Layout';

const styles = theme => ({
  root: {},
  heading: {
    background: theme.colors.white,
    borderBottom: `1px solid ${theme.colors.lightest}`,
    position: 'relative',
    '& h1': {
      display: 'inline-block',
      fontSize: theme.fontSize.h1,
      paddingLeft: '40px'
    },
    '& button': {
      borderRadius: '3px',
      fontSize: theme.fontSize.base,
      margin: '20px',
      padding: '0.65em 0.8em',
      position: 'absolute',
      right: '120px'
    }
  },
  dropdown: {
    display: 'inline-block',
    position: 'absolute',
    margin: '20px',
    right: '0',
    width: '100px'
  },
  campaign: {
    background: theme.colors.lightest,
    height: '230px',
    padding: '15px',
    margin: '40px 20px',
    width: '270px'
  },
  statusButton: {
    fontSize: theme.fontSize.small,
    padding: '8px',
    position: 'absolute',
    right: '25px',
    top: '25px'
  },
  empty: {
    fontSize: theme.fontSize.large,
    margin: '40px 20px'
  }
});

/**
 * The overview of all brand campaigns.
 */
const Campaigns = ({ campaigns, classes }) => (
  <Layout className={classes.root}>
    <Sticky.Top>
      <div className={classes.heading}>
        <h1>Campaign Overview</h1>
        <Link.Next href="/campaigns/create">
          <a>
            <Button.Primary>+ New Campaign</Button.Primary>
          </a>
        </Link.Next>
        <Dropdown.SingleSelect
          id="dropdown-campaigns"
          className={classes.dropdown}
          defaultValue="perksy"
          options={brands}
        />
      </div>
    </Sticky.Top>
    <Tabs.Horizontal>
      {Object.keys(campaigns).map(key => {
        const campaignType = campaigns[key];
        const campaignLength = campaignType.length;
        return (
          <Tabs.Panel
            title={<Status.Title code={key} suffix={` (${campaignLength})`} />}
            key={key}
          >
            <Columns.Even shouldWrap>
              {campaignLength === 0 && (
                <Status.Title
                  className={classes.empty}
                  code={key}
                  prefix="No Campaigns "
                />
              )}
              {campaignType.map(campaign => (
                <Campaign.Card
                  {...campaign}
                  className={classes.campaign}
                  key={campaign.name}
                >
                  <Status.Button className={classes.statusButton} code={key} />
                </Campaign.Card>
              ))}
            </Columns.Even>
          </Tabs.Panel>
        );
      })}
    </Tabs.Horizontal>
  </Layout>
);

Campaigns.propTypes = {
  /** Object of campaigns grouped by status */
  campaigns: PropTypes.object.isRequired,
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired
};

Campaigns.getInitialProps = async () => ({ campaigns: data });

export default injectSheet(styles)(Campaigns);
