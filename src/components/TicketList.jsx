import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.ticketList).map(function(ticketId) {
        var ticket = props.ticketList[ticketId];
        return <Ticket username={ticket.username}
          topic={ticket.topic}
          colum={ticket.colum}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticketId}
          ticketId={ticketId}
          onTicketSelection={props.onTicketSelection}/>;
      })}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;