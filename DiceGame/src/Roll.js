import React , {Component } from 'react';
import './Roll.css';
import Die from './Die.js';
class Game extends Component {
    constructor(props) {
        super(props);

        this.state={
            num1:this.random(),
            num2:this.random(),
            isRolling:false
        }
        this.handleClick=this.handleClick.bind(this);
    };

    random() {
        return Math.floor(Math.random()*6)+1;
    }
    handleClick(e) {
        this.setState({
            num1:this.random(),
            num2:this.random(),
            isRolling:true
        })
        setTimeout(()=>{
            this.setState({isRolling:false});
        },1000);
    }
    render() {
        return (
            <div className="Roll">
                <div className="container">
                    <Die num={this.state.num1} rolling={this.state.isRolling}/>
                    <Die num={this.state.num2} rolling={this.state.isRolling}/>
                </div>
                <button onClick={this.handleClick} disabled={this.state.isRolling}>
                    {
                        (this.state.isRolling?"Rolling ....":"Roll Dice !")

                    }
                </button>
            </div>
        )
    }
}

export default Game;