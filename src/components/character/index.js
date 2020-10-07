// @flow
import React from "react";
import './index.css';
import Body from './body';
import { Balloon } from "nes-react";

// TODO ideas
// too much light/lack of nutrition makes fungi slow growth
// too much co2 kills fungi
// too much oxygen kills fungi
// levels should affect appearance/rate at which milestones happen

type State = {

};

type Props = {
    age: number
};

class Character extends React.Component<Props, State> {
  render() {
    return (
      <div className="Character">        
        <Balloon fromRight>
            i'm a funguy
        </Balloon>
        <Body />
      </div>
    );
  }
}

export default Character;
