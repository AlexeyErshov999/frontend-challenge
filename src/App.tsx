import { useEffect, useState } from "react";
import { ICatImage } from "./types/cats.types";
import { fetchCats } from "./api/catsApi";

function App() {
  const [cats, setCats] = useState<ICatImage[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCats();
        setCats(data);
      } catch (error) {
        console.error("Ошибка при загрузке котиков:", error);
      }
    };

    loadData();
  }, []);

  return (
    <>
      <h1>Cats:</h1>
      {cats.map((cat) => (
        <img key={cat.id} src={cat.url} alt={cat.id} />
      ))}
    </>
  );
}

export default App;
