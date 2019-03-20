import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MainTabs from '../MainTabs';

const styles = ({
  content: {
    display: 'flex',
  },
  header: {
    margin: '0.5rem 0 0 0',
  },
});

const MainView = ({
  classes, ldapEmail, partialOrg, bugzillaComponents, teamComponents,
  onComponentDetails, onPersonDetails,
}) => (
  <div key={ldapEmail}>
    <h2 className={classes.header}>{partialOrg[ldapEmail].cn}</h2>
    <div>
      <MainTabs
        ldapEmail={ldapEmail}
        partialOrg={partialOrg}
        onPersonDetails={onPersonDetails}
        teamComponents={teamComponents}
        onComponentDetails={onComponentDetails}
        bugzillaComponents={bugzillaComponents}
      />
    </div>
  </div>
);

MainView.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  ldapEmail: PropTypes.string.isRequired,
  partialOrg: PropTypes.shape({}).isRequired,
  bugzillaComponents: PropTypes.arrayOf(PropTypes.shape({})),
  teamComponents: PropTypes.arrayOf(PropTypes.shape({})),
  onComponentDetails: PropTypes.func.isRequired,
  onPersonDetails: PropTypes.func.isRequired,
};

MainView.defaultProps = {
  bugzillaComponents: [],
  teamComponents: [],
};

export default withStyles(styles)(MainView);
