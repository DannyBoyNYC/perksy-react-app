import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Link from '~/components/link';

const styles = {
  root: {
    paddingTop: '15%',
    textAlign: 'center'
  },
  notFound: {
    '& img': {
      width: '200px'
    }
  },
  other: {}
};

const NotFoundError = ({ className }) => (
  <div className={className}>
    <img
      src="/static/alter_ego_4.svg"
      alt="Perksy alter ego logo with sad face"
    />
    <p>Sorry! We cannot seem to find what you are looking for.</p>
    <Link.Next href="/">
      <a>Return to the homepage</a>
    </Link.Next>
  </div>
);

NotFoundError.propTypes = {
  /** Additional class styles to add */
  className: PropTypes.string
};

const OtherError = ({ className, message, statusCode }) => (
  <div className={className}>
    <p>{statusCode}</p>
    <p>{message}</p>
  </div>
);

OtherError.propTypes = {
  /** Additional class styles to add */
  className: PropTypes.string,
  /** Error message from the server */
  message: PropTypes.string.isRequired,
  /** Status code of the error */
  statusCode: PropTypes.number.isRequired
};

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = (res && res.statusCode) || (err && err.statusCode);
    const message = err && err.message;
    return { message, statusCode };
  }

  render() {
    const { classes, message, statusCode } = this.props;

    return (
      <div className={`page--error ${classes.root}`}>
        {statusCode === 404 ? (
          <NotFoundError className={classes.notFound} />
        ) : (
          <OtherError
            className={classes.other}
            message={message}
            statusCode={statusCode}
          />
        )}
      </div>
    );
  }
}

Error.propTypes = {
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Error message from the server */
  message: PropTypes.string,
  /** Status code of the error */
  statusCode: PropTypes.number.isRequired
};

export default injectSheet(styles)(Error);
