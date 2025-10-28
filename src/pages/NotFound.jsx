import { Link } from "react-router";

export const NotFound = () => {
  return (
    <main className="container px-6 flex justify-center text-center  items-center">
      <section>
        <img width="500" src="./not-found.svg" alt="Not Found Image" />
        <h1 className="text-xl pt-10 pb-2 md:text-2xl font-semibold">
          Page Not Found!.
        </h1>
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
