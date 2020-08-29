import React from 'react';
import './Simulation.css';
import Heartbeat from './components/heartbeat';

type State = {
  powerStatus: boolean
};

type Props = {

};

class Simulation extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      powerStatus: true
    };
    
    this.togglePower = this.togglePower.bind(this);
  }

  togglePower() {
    this.setState(state => ({
      powerStatus: !state.powerStatus
    }));
  }

  render() {
    return (
      <div className="Simulation">
        <span onClick={() => this.togglePower()} className="PowerBtn">Power {this.state.powerStatus ? `off` : `on`}</span>
        <Heartbeat power={this.state.powerStatus} />
      </div>
    );
  }
}

export default Simulation;
