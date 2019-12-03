  
import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedTicket.username} - {props.selectedTicket.topic}</h1>
      <h2>Submitted {props.selectedTicket.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedTicket.colum}</em></h4>
      <hr/>
    </div>
  );
}

TicketDetail.propTypes = {
  selectedTicket: PropTypes.object
};

export default TicketDetail;