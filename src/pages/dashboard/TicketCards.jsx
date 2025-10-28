import { NotebookText, Ticket, X } from "lucide-react";

export const TicketCards = ({ ticketCount }) => {
  return (
    <div className="flex max-md:flex-col gap-6 pt-10 pb-14">
      <div className="flex gap-4 items-center md:max-w-96 w-full shadow rounded-md p-6 lg:px-10">
        <div className="p-2 rounded-full bg-yellow-200 text-yellow-700">
          <Ticket />
        </div>
        <div>
          <p>Total Tickets</p>
          <h2 className="font-semibold text-xl md:text-2xl">
            {ticketCount.totalTickets}
          </h2>
        </div>
      </div>
      <div className="flex gap-4 items-center md:max-w-96 w-full shadow rounded-md p-6 lg:px-10">
        <div className="p-2 rounded-full bg-green-200 text-green-700">
          <NotebookText strokeWidth={2} />
        </div>
        <div>
          <p>Open Tickets</p>
          <h2 className="font-semibold text-xl md:text-2xl">
            {ticketCount.openTickets}
          </h2>
        </div>
      </div>
      <div className="flex gap-4 items-center md:max-w-96 w-full shadow rounded-md p-6 lg:px-10">
        <div className="p-2 rounded-full bg-red-50 text-red-700">
          <X strokeWidth={2} />
        </div>
        <div>
          <p>Resolved Tickets</p>
          <h2 className="font-semibold text-xl md:text-2xl">
            {ticketCount.resolvedTickets}
          </h2>
        </div>
      </div>
    </div>
  );
};
