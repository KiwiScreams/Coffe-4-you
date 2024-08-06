import "./Main.css";
import { useState, useEffect } from "react";
const Main = () => {
  const citations = [
    {
      id: 1,
      author: "John Doe",
      citate: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      author: "Jane Doe",
      citate:
        "Quos provident fugiat, eum assumenda incidunt corporis doloribus veritatis.",
    },
    {
      id: 3,
      author: "Bob Smith",
      citate:
        "Temporibus, explicabo. Provident fugiat, eum assumenda incidunt corporis.",
    },
  ];
  const [randomCitation, setRandomCitation] = useState({});

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * citations.length);
    setRandomCitation(citations[randomIndex]);
  }, []);

  return (
    <>
      <section className="main-container">
        <div className="text-container">
          <h1>Coffee 4 You</h1>
          <p>
            {randomCitation.citate}
          </p>
          <p>{randomCitation.author}</p>
          <div className="button-container">
            <div className="line"></div>
            <button>View Our Menu</button>
            <div className="line"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
