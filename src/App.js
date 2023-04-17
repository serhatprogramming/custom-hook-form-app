import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [height, setHeight] = useState("");

  return (
    <div>
      <form>
        name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        birtdate:
        <input
          type="date"
          value={born}
          onChange={(e) => setBorn(e.target.value)}
        />
        height:{" "}
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </form>
      <div>
        {name} was born on {born} with height of
        {height}
      </div>
    </div>
  );
};

export default App;
