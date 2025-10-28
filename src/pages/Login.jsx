import axios from "axios";
import { useRef } from "react";
import toast from "react-hot-toast";
import { Logo } from "../components";
import { apiUrl } from "../constant";
import { Form, Formik } from "formik";
import { Input } from "../components";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router";
import { LoginFields, LoginSchema, LoginValues } from "../form";

export const Login = () => {
  const formikRef = useRef();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  return (
    <main className="container bg-white grid place-items-center px-6 py-16">
      <section className="lg:w-5/6 mx-auto justify-between lg:flex">
        <div className="lg:w-5/12 text-center">
          {/* Logo */}
          <Logo />
          <div className="pb-7 pt-10 lg:pb-10">
            <h1 className="text-xl md:text-2xl font-semibold">Login</h1>
            <p>
              Welcome back to <span className="text-primary-400">Tixly</span>
            </p>
          </div>
          {/* Form */}
          <Formik
            innerRef={formikRef}
            initialValues={LoginValues}
            validationSchema={LoginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              try {
                const { data } = await axios.post(
                  `${apiUrl}/api/v1/auth/login`,
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
                toast.error(
                  error.response?.data?.message || "Please try again later!"
                );
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="grid gap-4 max-w-sm lg:max-w-md mx-auto">
                {LoginFields.map(field => (
                  <Input key={field.name} {...field} />
                ))}
                <button className="my-6" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Signing in..." : "Log In"}
                </button>
              </Form>
            )}
          </Formik>
          <p>
            Don't have an account?{" "}
            <a
              href="/auth/signup"
              className="text-primary-400 hover:text-primary-600 hover:underline"
            >
              Create Account
            </a>
          </p>
        </div>
        <div className="lg:w-1/2 max-lg:hidden flex justify-end items-center">
          <img
            className="w-full"
            src="../oc-on-the-laptop.svg"
            alt="A man on his laptop using Tixly"
          />
        </div>
      </section>
    </main>
  );
};
