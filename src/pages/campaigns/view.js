import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Button from '~/components/button';
import Columns from '~/components/columns';
import Dropdown from '~/components/dropdown';
import Tabs from '~/components/tabs';
import Sticky from '~/components/sticky';

import { brands } from '~/data/homepage';
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
  }
});

/**
 * The overview of all brand campaigns.
 */
const View = ({ classes }) => (
  <Layout className={classes.root}>
    <Sticky.Top>
      <div className={classes.heading}>
        <h1>New Campaign</h1>
        <Button.Primary>+ New Campaign</Button.Primary>
        <Dropdown.SingleSelect
          className={classes.dropdown}
          defaultValue="perksy"
          options={brands}
        />
      </div>
    </Sticky.Top>
    <Tabs.Horizontal>
      <Tabs.Panel title="View Campaign">
        <Columns.Even>
          <div>
            <p>Campaign Name</p>
            <p>Campaign Objectives</p>
          </div>
          <div>
            <p>Campaign Type</p>
            <p>Stack Code Settings</p>
          </div>
        </Columns.Even>
      </Tabs.Panel>
      <Tabs.Panel title="" />
    </Tabs.Horizontal>
  </Layout>
);

View.propTypes = {
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired
};

View.getInitialProps = async () => ({});

export default injectSheet(styles)(View);
