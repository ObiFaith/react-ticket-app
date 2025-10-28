import * as Yup from "yup";

export const TicketFields = [
  {
    type: "text",
    name: "title",
    label: "Title",
    placeholder: "Create Vue Project",
  },
  {
    type: "text",
    name: "description",
    label: "Description",
    placeholder: "Create a Ticket Management in Vue3",
  },
];

export const LoginFields = [
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "example@gmail.com",
  },
  {
    type: "password",
    name: "password",
    label: "Password",
  },
];

export const SignupFields = [
  {
    type: "text",
    name: "firstName",
    label: "First Name",
    placeholder: "Faith",
  },
  {
    type: "text",
    name: "lastName",
    label: "Last Name",
    placeholder: "Obi",
  },
  ...LoginFields,
  {
    type: "password",
    name: "confirmPassword",
    label: "Confirm Password",
  },
];

export const TicketValues = {
  title: "",
  priority: "medium",
  description: "",
};

export const LoginValues = {
  email: "",
  password: "",
};

export const SignupValues = {
  firstName: "",
  lastName: "",
  ...LoginValues,
  confirmPassword: "",
};

export const TicketSchema = Yup.object({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .required("Title is required!"),
  priority: Yup.string().required("Priority is required!"),
  description: Yup.string(),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

export const SignupSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "First name must be at least 3 characters")
    .required("First name is required!"),
  lastName: Yup.string()
    .min(3, "Last name must be at least 3 characters")
    .required("Last name is required!"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required!"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least a uppercase letter")
    .matches(/[a-z]/, "Password must contain at least a lowercase letter")
    .matches(
      /[0-9!@#$%^&*(),.?{}|<>]/,
      "Password must contain at least a number or symbol"
    )
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password does not match!")
    .required("Please confirm your password!"),
}).concat(LoginSchema);
