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
        <input {...name} />
        birtdate:
        <input {...born} />
        height:
        <input {...height} />
      </form>
      <div>
        {name.value} was born on {born.value} with height of
        {height.value}
      </div>
    </div>
  );
};

export default App;
