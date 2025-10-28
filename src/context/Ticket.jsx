import axios from "axios";
import { useAuth } from ".";
import { apiUrl } from "../constant";
import { createContext, useContext, useEffect, useState } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const { user, loading: authLoading } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ticketCount, setTicketCount] = useState({
    totalTicket: 0,
    openTickets: 0,
    resolvedTickets: 0,
  });

  useEffect(() => {
    const fetchUserTicket = async () => {
      if (authLoading || !user?.id) return;
      const token = localStorage.getItem("token");

      try {
        const {
          data: { tickets, counts },
        } = await axios.get(`${apiUrl}/api/v1/tickets`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setTickets(tickets);
        setTicketCount(counts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserTicket();
  }, [user?.id, authLoading]);

  return (
    <TicketContext.Provider
      value={{ tickets, ticketCount, loading, setTickets }}
    >
      {children}
    </TicketContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTicket = () => useContext(TicketContext);
