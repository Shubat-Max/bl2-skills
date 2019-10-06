import React from "react";
import {Header,HeroClass,HeroName,Navigation,StyledLink} from './HeroSelector.sc';

interface NavItem {
  name: string;
  class: string;
  link: string;
}

const _NAVLIST: NavItem[] = [
  {
    name: "Maya",
    class: "Siren",
    link: "/maya"
  },
  {
    name: "Axton",
    class: "Commando",
    link: "/axton"
  },
  {
    name: "Zero",
    class: "Assassin",
    link: "/zero"
  },
  {
    name: "Salvador",
    class: "Gunzerker",
    link: "/salvador"
  },
  {
    name: "Gaige",
    class: "Mechromancer",
    link: "/gaige"
  },
  {
    name: "Krieg",
    class: "Psycho",
    link: "/krieg"
  }
];

const HeroSelector = () => {
  return (
    <div>
      <Header>Borderlands 2 Skill Calculator</Header>
      <Navigation>
        {_NAVLIST.map((item, i) => (
          <StyledLink to={item.link} key={i}>
            <HeroName>{item.name}</HeroName>
            <HeroClass>{item.class}</HeroClass>
          </StyledLink>
        ))}
      </Navigation>
    </div>
  );
};



export default HeroSelector;
