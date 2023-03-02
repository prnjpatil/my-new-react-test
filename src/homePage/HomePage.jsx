import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const URL = "https://dummyjson.com/products";

const HomePage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCards(data.products);
        console.log(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>This is Home Page</h1>
      <div>
        <Link to="/counterPage"> Click Here to go counter Page </Link>
      </div>
      {cards.map((card) => (
        <Card
          title={card.title}
          description={card.description}
          thumbnail={card.thumbnail}
          key={card.id}
        />
      ))}
    </div>
  );
};
export default HomePage;
