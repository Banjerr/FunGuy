// @flow
import React from 'react';
import './index.css';
import Stastics from '../statistics';

// TODO ideas
// too much light/lack of nutrition makes fungi slow growth
// too much co2 kills fungi
// too much oxygen kills fungi
// levels should affect appearance/rate at which milestones happen
function Character() {
    return (
        <div className="Character">
            <Stastics />
            i'm a funguy
        </div>
    );
}

export default Character;
