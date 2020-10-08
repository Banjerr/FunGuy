// @flow
import React from 'react';
import Environment from '../environment';
import { stateStore, stateService } from '../state';

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
    constructor(props) {
        super(props);

        this.state = {
          age: 0,
        };

        this.updateAge = this.updateAge.bind(this);
        this.timelineCheck = this.timelineCheck.bind(this);
        this.beat = this.beat.bind(this);
        this.setInitialAge = this.setInitialAge.bind(this);
    }   

    updateAge() {   
        this.setState(prevState => ({
            age: prevState.age + 1,
        }));
        stateStore.sendState({age: this.state.age});
    }

    setInitialAge(stateObj) {
        console.log('stateObj is ', stateObj);
        let { age } = stateObj;
        this.setState({ age: age });
    }

    // TODO figure out how to better degrade stats over time at intervals
    // turn into observable stream
    timelineCheck() {
        if (this.state.age >= 30) {
console.log("more than 30 seconds");
        } else if (this.state.age >= 60) {
console.log("more than 2 minutes");
        } else if (this.state.age >= 120) {
console.log('more than 3 minutes');
        } else if (this.state.age >= 180) {
console.log("more than 3 minutes");
        } else if (this.state.age >= 360) {
console.log("more than 6 minutes");
        } 
    }

    beat() {
        this.updateAge();
        this.timelineCheck();
    }

    componentDidMount() {        
        setInterval(() => {
            if (this.props.power) {
                stateService.subscribe(this.setInitialAge);
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
