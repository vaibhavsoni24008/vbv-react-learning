import { useState } from "react";

// 1. Click events
function ClickDemo() {
  const [log, setLog] = useState([]);

  function handleClick() {
    setLog([...log, "click hua"]);
  }
  function handleHover() {
    setLog([...log, "mouse upar aaya"]);
  }

  return (
    <div>
      <h2>1. Events</h2>
      <button onClick={handleClick} onMouseEnter={handleHover}>
        Mujh par click ya hover karo
      </button>
      <button onClick={() => setLog([])}>Log clear</button>
      <ul>
        {log.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// 2. Controlled input
function NameBox() {
  const [name, setName] = useState("");
  return (
    <div>
      <h2>2. Controlled input</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Naam likho"
      />
      <p>Hello, {name}</p>
      <p>Uppercase: {name.toUpperCase()}</p>
      <button onClick={() => setName("")}>Clear</button>
    </div>
  );
}

// 3. Form with ek state object
function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // page reload rokta hai
    setSubmitted(form);
    setForm({ name: "", email: "" }); // form clear
  }

  return (
    <div>
      <h2>3. Form (onSubmit + preventDefault)</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Naam"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Sign up</button>
      </form>
      {submitted && (
        <p>
          Submit hua: {submitted.name} ({submitted.email})
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Day 2: Events and Forms</h1>
      <ClickDemo />
      <NameBox />
      <SignupForm />
    </div>
  );
}

export default App;