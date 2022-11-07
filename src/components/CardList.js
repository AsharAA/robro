import React from "react";
import Card from "../components/Card";
// import { robo } from "./robo";

const CardList = ({ robo }) => {
  return (
    <div>
      {robo.map((user, j) => {
        return (
          <Card
            key={j}
            id={robo[j].id}
            name={robo[j].name}
            email={robo[j].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
