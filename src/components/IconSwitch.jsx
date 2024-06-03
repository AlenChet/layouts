import React from 'react';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <button onClick={onSwitch}>
      <span className="material-icons">{icon}</span>
    </button>
  );
};

export default IconSwitch;
