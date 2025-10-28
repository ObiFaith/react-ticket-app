import { NavLink } from "react-router";

function App() {
  return (
    <div>
      <NavLink to="/auth/login">Login</NavLink>
      <NavLink to="/auth/signup">Signup</NavLink>
    </div>
  );
}

export default App;
