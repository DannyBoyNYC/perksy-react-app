import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Block from '~/components/block';
import Button from '~/components/button';
import Columns from '~/components/columns';
import Dropdown from '~/components/dropdown';
import Sticky from '~/components/sticky';

import data from '~/data/homepage';
import Layout from './Layout';

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
  graph: {
    background: theme.colors.lightest,
    margin: '30px 40px',
    minHeight: '450px'
  },
  campaigns: {
    background: theme.colors.lightest,
    marginTop: '40px',
    padding: '0 40px'
  },
  campaignsBlock: {},
  responsesBlock: {
    borderLeft: `1px solid ${theme.colors.lightest}`,
    padding: '20px 40px'
  }
});

const addChildren = (campaign, index) => {
  const {
    respondents: { current }
  } = campaign;
  const children = [
    <span key={`child-0-${index}`} style={{ padding: '0 20px' }}>
      {current}
    </span>,
    <span key={`child-1-${index}`} style={{ padding: '0 20px' }}>
      Ended 07/23/2018
    </span>
  ];
  return Object.assign({}, campaign, { children });
};

/**
 * The main landing page for users.
 */
class Homepage extends React.Component {
  static async getInitialProps({ reduxStore }) {
    console.log(reduxStore.getState());

    return { ...data };
  }

  render() {
    const { brands, classes, current, ended, upcoming } = this.props;

    return (
      <Layout className={classes.root}>
        <Sticky.Top>
          <div className={classes.heading}>
            <h1>Today</h1>
            <Button.Primary>+ New Campaign</Button.Primary>
            <Dropdown.SingleSelect
              id="dropdown-homepage"
              className={classes.dropdown}
              defaultValue="perksy"
              options={brands}
            />
          </div>
        </Sticky.Top>
        <Columns.SpanThreeSpanTwo>
          <div className={classes.graph} />
          <Block.CampaignPercentage
            className={classes.responsesBlock}
            heading="Total Campaign Responses"
            items={current}
          />
        </Columns.SpanThreeSpanTwo>
        <Columns.Even className={classes.campaigns}>
          <Block.CampaignRow
            className={classes.campaignsBlock}
            heading="Recently Ended Campaigns"
            items={ended.map(addChildren)}
          />
          <Block.CampaignRow
            className={classes.campaignsBlock}
            heading="Upcoming Campaigns"
            items={upcoming.map(addChildren)}
          />
        </Columns.Even>
      </Layout>
    );
  }
}

Homepage.propTypes = {
  /** List of available brands */
  brands: PropTypes.arrayOf(PropTypes.object),
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** List of recently ended campaigns */
  ended: PropTypes.arrayOf(PropTypes.object),
  /** List of current campaigns */
  current: PropTypes.arrayOf(PropTypes.object),
  /** List of scheduled campaigns */
  upcoming: PropTypes.arrayOf(PropTypes.string)
};

const HomepageWithStyles = injectSheet(styles)(Homepage);

export default connect()(HomepageWithStyles);
