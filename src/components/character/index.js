// @flow
import React from "react";
import './index.css';
import Stastics from '../statistics';
import Body from './body';

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
        <Stastics age={this.props.age} />
        i'm a funguy
          <Body />
      </div>
    );
  }
}

export default Character;
