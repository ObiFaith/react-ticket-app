import { ErrorMessage, Field } from "formik";

export const Input = ({ label, name, type, placeholder }) => {
  return (
    <div className="grid gap-1 text-left">
      {label && (
        <label className="block" htmlFor={name}>
          {label}
        </label>
      )}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-600 text-sm"
      />
      <Field placeholder={placeholder} type={type} id={name} name={name} />
    </div>
  );
};
