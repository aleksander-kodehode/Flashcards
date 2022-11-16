import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");

  return (
    <div className="App">
      <form>
        <label htmlFor="inputCardTitle">Set a card title</label>
        <input
          id="inputCardTitle"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}

export default App;
