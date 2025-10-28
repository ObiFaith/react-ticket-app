import { Link } from "react-router";
import { useTicket } from "../../context";
import { TicketCards, TicketList } from ".";

export const Dashboard = () => {
  const { tickets, ticketCount } = useTicket();

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="sm:flex gap-4 justify-between items-center">
        <div>
          <h2 className="sm:text-xl text-lg font-semibold">Tickets</h2>
          <p className="opacity-95 max-sm:pb-4">
            Manage and track all your tickets
          </p>
        </div>
        {tickets.length > 0 && (
          <Link to="/dashboard/tickets" className="button max-w-40 text-center">
            Create Ticket
          </Link>
        )}
      </div>
      {tickets.length > 0 ? (
        <div className="space-y-4">
          <TicketCards ticketCount={ticketCount} />
          {tickets.map(ticket => (
            <TicketList key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center py-10 text-center items-center">
          <img
            width={300}
            src="./oc-on-the-laptop.svg"
            alt="A man on his laptop using Tixly"
          />
          <h2 className="text-lg md:text-xl font-medium pt-8">
            No Ticket Yet!
          </h2>
          <p className="opacity-95 pb-5">
            Create a new ticket to begin managing your tasks and tracking
            progress.
          </p>
          <Link to="/dashboard/tickets" className="button max-w-60">
            Create Ticket
          </Link>
        </div>
      )}
    </div>
  );
};
