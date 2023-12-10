
import React from 'react';

function TollDetails({ tollInfo }) {
  return (
    <div id="tollDetails">
      <p>Cost: {tollInfo.cost}</p>
      <p>Additional Details: {tollInfo.additionalDetails}</p>
    </div>
  );
}

export default TollDetails;
  