import axios from "axios";
import { useRef } from "react";
import toast from "react-hot-toast";
import { apiUrl } from "../constant";
import { Logo } from "../components";
import { Form, Formik } from "formik";
import { Input } from "../components";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router";
import { SignupFields, SignupSchema, SignupValues } from "../form";

export const Signup = () => {
  const formikRef = useRef();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  return (
    <main className="container px-6 bg-white grid place-items-center min-h-svh py-16">
      <section className="lg:w-5/6 mx-auto justify-between lg:flex">
        <div className="lg:w-5/12 text-center">
          {/* Logo */}
          <Logo />
          <div className="pb-7 pt-10 lg:pb-10">
            <h1 className="text-xl md:text-2xl font-semibold">
              Create Account
            </h1>
            <p>
              Welcome to <span className="text-primary-400">Tixly</span> — Let's
              get you started!
            </p>
          </div>
          {/* Form */}
          <Formik
            innerRef={formikRef}
            initialValues={SignupValues}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);

              try {
                const { data } = await axios.post(
                  `${apiUrl}/api/v1/auth/register`,
                  values
                );
                localStorage.setItem("token", data.token);
                setUser(data.user);
                formikRef.current?.resetForm();
                toast.success(data.message);
                setTimeout(() => {
                  navigate("/dashboard");
                }, 800);
              } catch (error) {
                toast.error(error.response?.data?.message || error.message);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="grid gap-4 max-w-sm lg:max-w-md mx-auto">
                {SignupFields.map(field => (
                  <Input key={field.name} {...field} />
                ))}
                <button className="my-6" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Creating account..." : "Sign Up"}
                </button>
              </Form>
            )}
          </Formik>
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="text-primary-400 hover:text-primary-600 hover:underline"
            >
              Login
            </a>
          </p>
        </div>
        <div className="lg:w-1/2 max-lg:hidden flex justify-end items-center">
          <img
            className="w-full"
            src="./oc-on-the-laptop.svg"
            alt="A man on his laptop using Tixly"
          />
        </div>
      </section>
    </main>
  );
};
