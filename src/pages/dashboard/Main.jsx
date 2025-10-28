import { TicketList } from ".";
import { Link } from "react-router";
import { useTicket } from "../../context";
import { NotebookText, Ticket, X } from "lucide-react";

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
          <Link
            to="/dashboard/tickets"
            className="button max-w-40 text-center"
          >
            Create Ticket
          </Link>
        )}
      </div>
      {tickets.length > 0 ? (
        <div className="">
          <div className="md:flex *:w-full gap-4 py-10 md:gap-6">
            <div className="flex gap-4 items-center shadow-md rounded-md py-6 px-10">
              <div className="p-2 bg-yellow-200 rounded-full text-yellow-700">
                <Ticket />
              </div>
              <div className="">
                <p>Total Tickets</p>
                <h2 className="font-semibold text-xl md:text-2xl">
                  {ticketCount.totalTickets}
                </h2>
              </div>
            </div>
            <div className="flex gap-4 items-center shadow-md rounded-md py-6 px-10">
              <div className="p-2 bg-green-200 rounded-full text-green-700">
                <NotebookText strokeWidth={2} />
              </div>
              <div>
                <p>Open Tickets</p>
                <h2 className="font-semibold text-xl md:text-2xl">
                  {ticketCount.openTickets}
                </h2>
              </div>
            </div>
            <div className="flex gap-4 items-center shadow-md rounded-md py-6 px-10">
              <div className="p-2 bg-red-200 rounded-full text-red-700">
                <X className="size-5" strokeWidth={2} />
              </div>
              <div className="">
                <p>Resolved Tickets</p>
                <h2 className="font-semibold text-xl md:text-2xl">
                  {ticketCount.resolvedTickets}
                </h2>
              </div>
            </div>
          </div>
          <TicketList tickets={tickets} ticketCount={ticketCount} />
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
