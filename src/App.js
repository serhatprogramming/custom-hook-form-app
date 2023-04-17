import { useState } from "react";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  return { type, value, onChange };
};

const App = () => {
  const name = useField("text");
  const born = useField("date");
  const height = useField("number");

  return (
    <div>
      <form>
        name:
        <input type={name.type} value={name.value} onChange={name.onChange} />
        birtdate:
        <input type={born.type} value={born.value} onChange={born.onChange} />
        height:
        <input
          type={height.type}
          value={height.value}
          onChange={height.onChange}
        />
      </form>
      <div>
        {name.value} was born on {born.value} with height of
        {height.value}
      </div>
    </div>
  );
};

export default App;
