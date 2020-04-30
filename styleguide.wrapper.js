const React = require('react');
const PropTypes = require('prop-types');
const { ThemeProvider } = require('react-jss');

const theme = require('./src/theme.config');

// eslint-disable-next-line react/prefer-stateless-function
export default class ThemeWrapper extends React.Component {
  render() {
    const { children } = this.props;
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
}

ThemeWrapper.propTypes = {
  /** Components to render wrapped in ThemeProvider */
  children: PropTypes.node.isRequired
};
