// @flow
import React from 'react';
import './index.css';
import Stastics from '../statistics';
import Character from '../character';
import { Container, Button } from 'nes-react';
import Slider from "react-rangeslider";

// TODO ideas
// environment needs actions - like fanning a monotub for FAE
// light can be increased/decreased

type State = {
    light: number,
    oxygen: number,
    temperature: number,
    humidity: number
};

type Props = {
    age: number
};

class Environment extends React.Component<Props, State> {
    handleLightChange: any

    constructor(props: any) {
        super(props);

        this.state = {
            light: 50,
            oxygen: 0,
            temperature: 0,
            humidity: 0
        };

        this.handleLightChange = this.handleLightChange.bind(this);
    }

    handleLightChange(value: number) {
        this.setState(() => ({
          light: value,
        }));
    }

    reversePercentage(finalNum) {
        return 100-finalNum;
    }

    render() {
        return (
          <Container>
            <Stastics age={this.props.age} />
            <Container className="Environmental-Controls">
              <p>Lights</p>
              <Slider
                value={this.state.light}
                orientation="vertical"
                onChange={this.handleLightChange}
              />
            </Container>
            <Container className="Environment">
              <div
                className="light"
                style={{
                  opacity: `${this.reversePercentage(this.state.light)}%`,
                }}
              ></div>
              <Character age={this.props.age} />
            </Container>
          </Container>
        );
    }
}

export default Environment;
