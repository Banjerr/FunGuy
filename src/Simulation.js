import React from 'react';
import './Simulation.css';
import { Container, Button } from "nes-react";
import Heartbeat from './components/heartbeat';
import { stateStore, stateService } from './components/state';

type State = {
  powerStatus: boolean
};

type Props = {

};

class Simulation extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      powerStatus: false
    };
    
    this.togglePower = this.togglePower.bind(this);
  }

  componentDidMount() {
    stateStore.init();
  }

  togglePower() {
    this.setState(state => ({
      powerStatus: !state.powerStatus
    }));
  }

  render() {
    return (
      <Container className="Simulation">
        <Button onClick={() => this.togglePower()} className="PowerBtn">Power {this.state.powerStatus ? `off` : `on`}</Button>
        <Heartbeat power={this.state.powerStatus} />
      </Container>
    );
  }
}

export default Simulation;
