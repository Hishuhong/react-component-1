import React from 'react';
import {Calender} from './index.js';

export default class CalenderDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange(value){
        this.setState({
            value 
        });
    }

    render() {
        return (
            <div>
                <h3>Calender</h3>
                <ul className="two">
                    <li>
                        <h4>Default Calender</h4>
                        <Calender/>
                    </li>
                    <li>
                        <h4>Calender with given value</h4>
                        <Calender value="2016-04-20"/>
                    </li>
                    <li>
                        <h4>Calender value change event</h4>
                        <p>date changed to {this.state.value}</p>
                        <Calender value={this.state.value} onChange={this.handleChange.bind(this)}/>
                    </li>
                    <li>
                        <h4>Calender with begin and end</h4>
                        <Calender begin="2015-12-15" end="2016-06-08"/>
                    </li>
                </ul>
            </div>
        );
    }
}
