import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    function demo() {
      console.log("Demo function executed");
    }
    demo();
  }, [query]);
  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      />
    </div>
  );
}
