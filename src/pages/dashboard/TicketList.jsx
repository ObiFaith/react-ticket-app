import { Link } from "react-router";
import { ticketStatus, ticketPriority } from "../../constant";

export const TicketList = ({ ticket }) => {
  return (
    <div className="border border-gray-400/30 p-5 rounded-md">
      <div className="md:flex items-center justify-between">
        <div className="md:flex items-center gap-2">
          <div className="flex items-center gap-2">
            <h2 className="text-black/80 font-semibold">
              Ticket #{ticket.id.slice(0, 4).toUpperCase()}-
              {ticket.id.slice(-4).toUpperCase()}
            </h2>
          </div>
          <div className="flex max-md:pt-2 gap-2 items-center">
            <p
              className={`px-2 text-white max-w-24 text-center rounded-md text-sm ${
                ticketStatus[ticket.status]
              }`}
            >
              {ticket.status[0].toUpperCase() + ticket.status.slice(1)}
            </p>
            {ticket.priority && (
              <p
                className={`px-2 max-w-24 text-center rounded-md text-sm ${
                  ticketPriority[ticket.priority]
                }`}
              >
                {ticket.priority[0].toUpperCase() + ticket.priority.slice(1)}
              </p>
            )}
          </div>
        </div>
        <Link
          className="underline max-md:hidden transition-all hover:text-primary-600 text-primary-400 font-medium underline-offset-2"
          to={`/dashboard/tickets/${ticket.id}`}
        >
          Open Ticket
        </Link>
      </div>
      <h3 className="pt-5 pb-2.5 font-semibold">{ticket.title}</h3>
      {ticket.description && (
        <p className="text-black/80 text-sm md:text-base">
          {ticket.description}
        </p>
      )}
      <hr className="border md:hidden my-2.5 border-gray-100" />
      <Link
        className="underline md:hidden transition-all hover:text-primary-600 text-primary-400 font-medium underline-offset-2"
        to={`/dashboard/tickets/${ticket.id}`}
      >
        Open Ticket
      </Link>
    </div>
  );
};
