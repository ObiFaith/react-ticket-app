import { useParams } from "react-router";
import { useTicket } from "../../context";
import { ticketPriority, ticketStatus } from "../../constant";

export const TicketDetail = () => {
  const { id } = useParams();
  const { tickets } = useTicket();
  const ticket = tickets.find(ticket => ticket.id === id);

  return (
    <div className="bg-white p-6 rounded-lg">
      {/* pt-10 pb-14 */}
      <div className="flex items-center gap-2">
        <p
          className={`w-5 h-5 rounded-full ${ticketStatus[ticket.status]}`}
        ></p>
        <h2 className="text-black/90 font-semibold">
          Ticket #{ticket.id.slice(0, 4).toUpperCase()}-
          {ticket.id.slice(-4).toUpperCase()}
        </h2>
        {ticket.priority && (
          <p
            className={`px-2 rounded-md text-sm ${
              ticketPriority[ticket.priority]
            }`}
          >
            {ticket.priority[0].toUpperCase() + ticket.priority.slice(1)}
          </p>
        )}
      </div>
      <h3 className="font-semibold pt-8 pb-5">{ticket.title}</h3>
      {ticket.description && <p>{ticket.description}</p>}
    </div>
  );
};
