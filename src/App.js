import "./App.css";
import MyForm from "./components/MyForm";
import User from "./components/User";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // Get users when the page loads
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch("http://localhost:7000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }

  return (
    <div>
      <MyForm onSubmitUser={getUsers} />
      {users.map((u) => (
        <User
          key={u.id}
          name={u.name}
          email={u.email}
        />
      ))}
    </div>
  );
}

export default App;
