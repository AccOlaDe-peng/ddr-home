import { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    // 使用 transition 延迟搜索结果更新
    startTransition(() => {
      const results = Array.from(
        { length: 5000 },
        (_, i) => `${value} - Result ${i + 1}`
      );
      setSearchResults(results);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type to search..."
      />
      {isPending && <p>Loading...</p>}
      <div>
        <h4>Results:</h4>
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
