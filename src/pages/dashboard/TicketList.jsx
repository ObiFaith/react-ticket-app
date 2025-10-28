import { NotebookText, Ticket, X } from "lucide-react";

export const TicketList = ({ tickets }) => {
  return (
    <div className="border border-grey-400/50 p-5 rounded-sm">
      <div className="flex font-semibold gap-2">
        <p className="w-5 h-5 rounded-full bg-yellow-400"></p>
        <h2>Ticket# 323231</h2>
      </div>
      <h3 className="pt-5 pb-2.5 font-semibold">
        How to deposit money to my portal?
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};
