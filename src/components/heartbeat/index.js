// @flow
import React from 'react';
import Environment from '../environment';

// TODO ideas
// heartbeat checks every second for stuff
// are levels good? if not, change character/stastics/timeline for worse
// if so, change character/stastics/timeline for better
function Heartbeat() {
    return (
        <div className="Heartbeat">
            <Environment />
        </div>
    );
}

export default Heartbeat;
