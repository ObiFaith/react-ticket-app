import { Link, useRouteError } from "react-router";

export const Error = () => {
  const error = useRouteError();
  return (
    <main className="container text-lg flex justify-center text-center min-h-svh items-center">
      <section>
        <h1 className="text-3xl md:text-4xl py-4 font-semibold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-red-600 pb-4">{error.statusText || error.message}</p>
        <Link
          to="/"
          className="text-primary-400 font-semibold underline underline-offset-2 hover:no-underline"
        >
          Go home
        </Link>
      </section>
    </main>
  );
};
