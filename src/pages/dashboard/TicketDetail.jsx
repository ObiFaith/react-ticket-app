import { useState } from "react";
import { useTicket } from "../../context";
import { Edit, Trash2 } from "lucide-react";
import { Field, Form, Formik } from "formik";
import { Navigate, useNavigate, useParams } from "react-router";
import { apiUrl, ticketPriority, ticketStatus } from "../../constant";
import { TicketFields, TicketSchema, TicketValues } from "../../form";
import axios from "axios";
import toast from "react-hot-toast";
import { Input } from "../../components";

export const TicketDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tickets, setTickets } = useTicket();
  const ticket = tickets.find(ticket => ticket.id === id);
  console.log(ticket);
  const [isEdit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(prev => !prev);
  };
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${apiUrl}/api/v1/tickets/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedTickets = tickets.filter(ticket => ticket.id !== id);
      setTickets(updatedTickets);
      toast.success("Ticket deleted successfully!");
      navigate(`/dashboard`);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="bg-white *:transition-all p-6 rounded-lg">
      <div className="md:flex items-center justify-between">
        <div>
          <h2 className="text-black/90 font-semibold">
            Ticket #{ticket.id.slice(0, 4).toUpperCase()}-
            {ticket.id.slice(-4).toUpperCase()}
          </h2>
          {!isEdit && (
            <div className="flex pt-2 gap-2 items-center">
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
          )}
        </div>
        {!isEdit && (
          <div className="flex gap-2 max-md:pt-4 md:gap-4 *:cursor-pointer *:transition-all *:rounded-lg items-center">
            <span
              className="bg-grey-400/70 hover:bg-grey-400/40 text-black"
              onClick={handleEdit}
            >
              <Edit className="p-1.5 md:p-2.5 size-7 md:size-10" />
            </span>
            <span
              className="bg-red-600/80 hover:bg-red-600/60 text-white"
              onClick={handleDelete}
            >
              <Trash2 className="p-1.5 md:p-2.5 size-7 md:size-10" />
            </span>
          </div>
        )}
      </div>
      {!isEdit ? (
        <>
          <h3 className="font-semibold pt-8 pb-5">{ticket.title}</h3>
          {ticket.description && (
            <p className="text-black/80 text-sm md:text-base">
              {ticket.description}
            </p>
          )}
        </>
      ) : (
        <Formik
          initialValues={{
            title: ticket.title,
            description: ticket.description,
            status: ticket.status,
            priority: ticket.priority,
          }}
          validationSchema={TicketSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            try {
              const token = localStorage.getItem("token");
              const { data } = await axios.patch(
                `${apiUrl}/api/v1/tickets/${id}`,
                values,
                { headers: { Authorization: `Bearer ${token}` } }
              );
              const updatedTickets = tickets.filter(ticket => ticket.id !== id);
              setTickets([...updatedTickets, data.ticket]);
              toast.success(data.message);
              navigate(`/dashboard`);
            } catch (error) {
              toast.error(error.response?.data?.message || error.message);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="grid gap-4 py-10 max-w-sm lg:max-w-md mx-auto">
              {TicketFields.map(field => (
                <Input key={field.name} {...field} />
              ))}
              <div className="grid gap-1 text-left">
                <label className="block" htmlFor="status">
                  Status
                </label>
                <Field
                  as="select"
                  name="status"
                  className="input text-black/90 bg-white"
                >
                  <option value="open">Open</option>
                  <option value="in_progress">In Progress</option>
                  <option value="closed">Closed</option>
                </Field>
              </div>
              <div className="grid gap-1 text-left">
                <label className="block" htmlFor="priority">
                  Priority
                </label>
                <Field
                  as="select"
                  name="priority"
                  className="input text-black/90 bg-white"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Field>
              </div>
              <div className="my-6 max-md:flex-col gap-4 flex">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Editing ticket..." : "Edit Ticket"}
                </button>
                <div
                  onClick={handleEdit}
                  className="bg-grey-400/70 hover:bg-gray-400 cursor-pointer font-medium max-w-32 flex items-center justify-center rounded-lg w-full text-black/80"
                >
                  Cancel
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};
