import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import { disconnect } from 'cluster';

function Admin(props){
  let optionalSelectedTicketContent= null;
  if (props.selectedTicket != null){
    optionalSelectedTicketContent = <TicketDetail selectedTicket ={props.ticketList[props.selectedTicket]}/>;
}
return (

  <div> 
    <h2> Admin</h2>
    {optionalSelectedTicketContent}
    <TicketList ticketList={props.ticketList}
    currentRouterPath={props.cururentRouterPath}
    onTicketSelection={props.onTicketSelection}/>
</div>
  );
}

Admin.PropTypes ={
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onTicketSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.string
};

export default Admin;
