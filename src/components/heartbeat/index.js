// @flow
import React from 'react';
import Environment from '../environment';

// TODO ideas
// heartbeat checks every second for stuff
// are levels good? if not, change character/stastics/timeline for worse
// if so, change character/stastics/timeline for better

type State = {
    age: number,
};

type Props = {
    power: boolean
};

class Heartbeat extends React.Component<Props, State> {
    state = {
        age: 0,
    };

    updateAge() {        
        this.setState(prevState => ({
            age: prevState.age + 1,
        }));
    }

    timelineCheck() {
        if (this.state.age >= 30) {
console.log('more than 30 seconds');
        } else if (this.state.age >= 180) {
console.log('more than 3 minutes');
        } else if (this.state.age >= 360) {
console.log('more than 6 minutes')
        } 
    }

    beat() {
        this.updateAge();
        this.timelineCheck();
    }

    componentDidMount() {
        setInterval(() => {
            if (this.props.power) {
                this.beat();
            }            
        }, 1000);      
    }

    render() {
        return (
            <div className="Heartbeat">
                <Environment age={this.state.age} />
            </div>
        );
    }
}

export default Heartbeat;
