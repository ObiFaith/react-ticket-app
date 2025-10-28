import { Link } from "react-router";
import { ticketStatus, ticketPriority } from "../../constant";

export const TicketList = ({ ticket }) => {
  return (
    <div className="border border-gray-400/30 p-5 rounded-md">
      <div className="flex items-center justify-between">
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
        <Link
          className="underline transition-all hover:text-primary-600 text-primary-400 font-medium underline-offset-2"
          to={`/dashboard/tickets/${ticket.id}`}
        >
          Open Ticket
        </Link>
      </div>
      <h3 className="pt-5 pb-2.5 font-semibold">{ticket.title}</h3>
      {ticket.description && (
        <p className="line-clamp-3">{ticket.description}</p>
      )}
    </div>
  );
};
