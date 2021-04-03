import React,{Component} from 'react';
import Coin from './Coin.js';
import './Flipper.css';
export default class Flipper extends Component {

    constructor(props) {
        super(props);
        this.state={
            total:0,
            headCount:0,
            current:0
        }
        this.fliphandle=this.fliphandle.bind(this);
    }
    fliphandle(e) {
        let choice=Math.floor(Math.random()*2);
        // if choice==0 then we will choose tail else head
        this.setState(currstate=>(
            {
                total:currstate.total+1,
                headCount:currstate.headCount+choice,
                current:choice
            }
        ))
    }
    render() {
        return (
            <div className="Flipper">
                <h1>Let's Flip a coin</h1>
                {this.state.total!==0 && <Coin face={this.state.current} />}
                <button onClick={this.fliphandle}> Flip Me!</button>
                <p>
                Out of {this.state.total} flips, there have been {this.state.headCount } heads and {this.state.total-this.state.headCount} tails.
                </p> 
            </div>
        )
    }
}