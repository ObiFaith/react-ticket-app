import { NavLink } from "react-router";

function App() {
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </div>
  );
}

export default App;
