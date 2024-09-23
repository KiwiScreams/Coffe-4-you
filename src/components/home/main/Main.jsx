import { useNavigate } from "react-router-dom";
import "./Main.css";
import { useState, useEffect } from "react";
const Main = () => {
  const navigate = useNavigate();
  const citations = [
    {
      id: 1,
      author: "",
      citate: "Coffee is a daily necessity",
    },
    {
      id: 2,
      author: "",
      citate: "I like my coffee like I like my mornings: dark and strong.",
    },
    {
      id: 3,
      author: "",
      citate:
        "A cup of coffee shared with a friend is happiness tasted and time well spent.",
    },
    {
      id: 4,
      author: "",
      citate: "Coffee is a magic potion that helps us face the daily grind.",
    },
    {
      id: 5,
      author: "",
      citate: "Coffee first. Schemes later.",
    },
    {
      id: 6,
      author: "",
      citate:
        "Good ideas start with brainstorming. Great ideas start with coffee.",
    },
    {
      id: 7,
      author: "Terri Guillemets",
      citate: "Coffee is the best thing to douse the sunrise with.",
    },
    {
      id: 8,
      author: "Jackie Chan",
      citate: "Coffee is a language in itself.",
    },
    {
      id: 9,
      author: "",
      citate: "Life happens, coffee helps.",
    },
    {
      id: 10,
      author: "Louisa May Alcott, Little Women",
      citate: "I'd rather take coffee than compliments just now.",
    },
    {
      id: 11,
      author: "Terry Pratchett",
      citate: "Coffee is a way of stealing time that should by rights belong to your older self.",
    },
    {
      id: 12,
      author: "Hugh Jackman",
      citate: "To me, the smell of fresh-made coffee is one of the greatest inventions.",
    },
  ];
  const [randomCitation, setRandomCitation] = useState({});
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * citations.length);
    setRandomCitation(citations[randomIndex]);
  }, []);
  const handleNavigateToMenu = () =>
  {
    navigate("/menu");
  }
  return (
    <>
      <section className="main-container">
        <div className="text-container">
          <h1>Coffee 4 You</h1>
          <p>"{randomCitation.citate}"</p>
          <cite>{randomCitation.author}</cite>
          <div className="button-container">
            <div className="line"></div>
            <button onClick={handleNavigateToMenu}>View Our Menu</button>
            <div className="line"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
