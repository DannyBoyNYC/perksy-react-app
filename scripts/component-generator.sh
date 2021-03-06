#!/bin/bash

set -eu

COMPONENT_NAME=''
DIRECTORY_PATH=''
DIRECTORY_NAME=''

# confirm user imput is correct
function confirm {
  case $confirmation in
    'y'|'Y'|'yes') addDirectory ;;
    'n'|'N'|'no') echo -e "\\nOk. Let's try that again."; prompt ;;
  esac
}

# verify correct directory name
function verify {
  if [ ! $DIRECTORY_NAME ]
    then
    echo $'\nYou did not enter a value.'
    prompt
  fi
  echo $'\nYou would like to add a new directory named: ' $DIRECTORY_NAME
  echo 'You would like to add a new component to that directory named: ' $COMPONENT_NAME
  echo $'\nIs this correct? [y|n]\n'
  read confirmation
  confirm
}

# prompt use for directory name
function prompt {
  echo 'Please enter the component directory name below. It should be lowercase and hyphen-separated for new words.'
  read -p 'Component directory: ' directory
  DIRECTORY_NAME=$directory
  DIRECTORY_PATH=components/$DIRECTORY_NAME
  COMPONENT_NAME=$(echo "$DIRECTORY_NAME" | awk 'BEGIN { FS="-"; OFS="" }; {for(j=1;j<=NF;j++){ $j=toupper(substr($j,1,1)) substr($j,2) }}1')
  verify
}

# add required files to component directory
function addFiles {
  # add a starter component file with required props
  echo "Creating ${COMPONENT_NAME}.js..."
cat << EOF > "${COMPONENT_NAME}.js"
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

/**
 * Renders a $COMPONENT_NAME.
 */
const $COMPONENT_NAME = ({ className, variation }) => (
  <div className={classnames('$DIRECTORY_NAME', \`$DIRECTORY_NAME--\${variation}\`, className)} />
);

$COMPONENT_NAME.propTypes = {
  /** Top level class name to add to component */
  className: PropTypes.string,
  /** Type of $DIRECTORY_NAME to render */
  variation: PropTypes.oneOf(['foo']).isRequired
};

export default $COMPONENT_NAME;
EOF

  # add a index.js for component export
  echo "Creating index.js..."
cat << EOF > "index.js"
import React from 'react';

import $COMPONENT_NAME from './$COMPONENT_NAME';

/**
 * $COMPONENT_NAME Variations.
 */
const Foo = props => <$COMPONENT_NAME {...props} variation="foo" />;

export default { Foo };
EOF

  # add a .spec file for testing
  echo "Creating ${COMPONENT_NAME}.spec.js..."
cat << EOF > "${COMPONENT_NAME}.spec.js"
const React = require('react');
const { shallow } = require('enzyme');

const $COMPONENT_NAME = require('./index').default;

describe('<$COMPONENT_NAME.* />', () => {
  let component;
  const requiredProps = {};

  describe('<$COMPONENT_NAME.Foo />', () => {
    beforeEach(() => {
      // We must use .dive() since the component is wrapped in a variation HOC
      component = shallow(<$COMPONENT_NAME.Foo {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('$DIRECTORY_NAME $DIRECTORY_NAME--foo');
    });
  });
});
EOF

  # add a styles.scss file using the package name
  echo "Creating styles.scss..."
cat << EOF > "styles.scss"
.$DIRECTORY_NAME {

}
EOF

  # add a README.md file with empty sections
  echo 'Creating README.md...'
cat << EOF > README.md
### Variations

#### $COMPONENT_NAME.Foo

\`\`\`jsx
const $COMPONENT_NAME = require('./index').default;

<$COMPONENT_NAME.Foo />;
\`\`\`
EOF
}

# create component directory
function addDirectory {
  if [ ! -d "$DIRECTORY_PATH" ]
  then
    mkdir -p "$DIRECTORY_PATH"
    cd "$DIRECTORY_PATH"
    addFiles
    cd - > /dev/null
    echo $'\nComponent created!'
  else
   echo $'\nSorry. That directory already exists.'
   prompt
  fi
}

# start generator
echo $'\nWelcome to the Perksy component generator.'
echo $'This generator will add the boilerplate files required for a new component.\n'

prompt
