import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { apiUrl } from "../../constant";
import { ArrowLeft } from "lucide-react";
import { Input } from "../../components";
import { useTicket } from "../../context";
import { Field, Form, Formik } from "formik";
import { TicketFields, TicketSchema, TicketValues } from "../../form";

export const AddTicket = () => {
  const formikRef = useRef();
  const { setTickets, setTicketCount } = useTicket();

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex gap-2">
        <Link
          className="hover:rounded-full border-white hover:border-black border-2"
          to="/dashboard"
        >
          <ArrowLeft />
        </Link>
        <div>
          <h2 className="md:text-lg text-md font-medium">Create Ticket</h2>
        </div>
      </div>
      {/* Form */}
      <Formik
        innerRef={formikRef}
        initialValues={TicketValues}
        validationSchema={TicketSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          try {
            const token = localStorage.getItem("token");
            const { data } = await axios.post(
              `${apiUrl}/api/v1/tickets`,
              values,
              { headers: { Authorization: `Bearer ${token}` } }
            );
            setTickets(tickets => [...tickets, data.ticket]);
            setTicketCount(ticketCounts => ({
              ...ticketCounts,
              openTickets: ticketCounts.openTickets + 1,
              totalTickets: ticketCounts.totalTickets + 1,
            }));
            formikRef.current?.resetForm();
            toast.success(data.message);
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
            <button className="my-6" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating ticket..." : "Create Ticket"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
