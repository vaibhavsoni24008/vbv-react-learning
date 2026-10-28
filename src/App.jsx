import { useState } from "react";

// 1. if/else early return
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) return <p>Welcome back!</p>;
  return <p>Please log in.</p>;
}

// 2. Ternary + && wala demo
function ConditionalDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>1. Conditional rendering</h2>

      <Greeting isLoggedIn={isLoggedIn} />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <p>Cart items: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(0)}>Empty cart</button>

      {/* Sahi: boolean test */}
      {count > 0 && <p>Cart mein {count} items hain</p>}

      {/* Trap: count 0 ho to screen par "0" dikhega. Neeche ki line uncomment karke dekho */}
      {/* {count && <p>Trap wala badge</p>} */}
    </div>
  );
}

// 3. List with map aur stable key
function ListDemo() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ada" },
    { id: 2, name: "Grace" },
    { id: 3, name: "Linus" },
  ]);

  function removeUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div>
      <h2>2. List with key</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => removeUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 4. Loading, Empty, Has data
function Results({ loading, items }) {
  if (loading) return <p>Loading...</p>;
  if (items.length === 0) return <p>No results yet.</p>;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

function StatesDemo() {
  const [mode, setMode] = useState("loading");

  const items =
    mode === "data"
      ? [
          { id: 1, name: "Gold Ring" },
          { id: 2, name: "Silver Chain" },
        ]
      : [];

  return (
    <div>
      <h2>3. Loading / Empty / Data</h2>
      <button onClick={() => setMode("loading")}>Loading</button>
      <button onClick={() => setMode("empty")}>Empty</button>
      <button onClick={() => setMode("data")}>Data</button>
      <Results loading={mode === "loading"} items={items} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Day 3: Conditional Rendering and Lists</h1>
      <ConditionalDemo />
      <ListDemo />
      <StatesDemo />
    </div>
  );
}

export default App;