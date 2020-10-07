// @flow
import React from 'react';
import './index.css';
import { Table, Progress } from "nes-react";

type State = {
    overallHealth: number,
    oxygen: number,
    light: number,
    nutrition: number
};

type Props = {
    age: number
};

class Stastics extends React.Component<Props, State> {
    state = {
        overallHealth: 100,
        oxygen: 100,
        light: 100,
        nutrition: 100
    };

    render() {
        return (
          <div className="Stastics">
            <div className="Statistics-Display">
              <Table bordered dark>
                <thead>
                  <tr>
                    <th>Over-All Health:</th>
                    <th>Oxygen:</th>
                    <th>Light:</th>
                    <th>Nutrition:</th>
                    <th>Age:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.overallHealth}%</td>
                    <td>{this.state.oxygen}%</td>
                    <td>{this.state.light}%</td>
                    <td>{this.state.nutrition}%</td>
                    <td>{this.props.age} seconds old</td>
                  </tr>
                  <tr>
                    <td><Progress value={this.state.overallHealth} max={100} /></td>
                    <td><Progress value={this.state.oxygen} max={100} /></td>
                    <td><Progress value={this.state.light} max={100} /></td>
                    <td><Progress value={this.state.nutrition} max={100} /></td>
                    <td><Progress value={this.props.age/60} max={100} /></td>
                  </tr>                  
                </tbody>
              </Table>
            </div>
          </div>
        );
    }
}

export default Stastics;
