import { useState, useEffect } from "react";

import { Card } from "../../components/Card/Card";
import { data } from "../../mocks/data";

import "./Home.css";

export function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(data)
  }, [])

  return (
    <>
      <section className="cards-home">
        {characters.map((char) => {
          return (
            <Card
              key={`char_${char.id}`}
              id={char.id}
              name={char.name}
              house={char.house}
              image={char.image}
              actor={char.actor}
            />
          );
        })}
      </section>
    </>
  );
}
