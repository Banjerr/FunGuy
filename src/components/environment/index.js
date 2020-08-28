// @flow
import React from 'react';
import './index.css';
import Character from '../character';

// TODO ideas
// environment needs actions - like fanning a monotub for FAE
// light can be increased/decreased

type State = {

};

type Props = {
    age: number
};

class Environment extends React.Component<Props, State> {
    render() {
        return (
            <div className="Environment">                
                <Character age={this.props.age} />
            </div>
        );
    }
}

export default Environment;
