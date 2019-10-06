import React from "react";

interface HeroCalculator {
  name: string;
}

const HeroCalculatorPage: React.FC<HeroCalculator> = ({name}) => {
  return (
    <div>
      <h1>Hero Calculator for {name}</h1>
    </div>
  );
};

export default HeroCalculatorPage;
