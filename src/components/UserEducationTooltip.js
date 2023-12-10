// components/UserEducationTooltip.js

import React from 'react';
import ReactTooltip from 'react-tooltip';

function UserEducationTooltip() {
  return (
    <div>
      <span data-tip="Tooltip content explaining toll calculations">Hover me for info</span>
      <ReactTooltip />
    </div>
  );
}

export default UserEducationTooltip;
