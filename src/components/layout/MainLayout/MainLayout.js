import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <PageNav />
        {children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
