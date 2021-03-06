import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab'
  return (
    <div
      className={props.selectedTab ? "tab active-tab" : "tab"}
      onClick={() => {props.selectTabHandler}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  props: PropTypes.shape({
    selectedTab: PropTypes.string,
    selectTabHandler: PropTypes.func.isRequired,
    tab: PropTypes.string.isRequired
  })
}

export default Tab;