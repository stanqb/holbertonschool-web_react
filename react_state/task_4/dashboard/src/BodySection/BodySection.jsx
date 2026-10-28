import React from 'react';
import PropTypes from 'prop-types';

class BodySection extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="bodySection px-3">
        <h2 className="text-xl font-bold">{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

BodySection.defaultProps = {
  title: '',
  children: null,
};

export default BodySection;
