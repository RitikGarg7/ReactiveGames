import React,{Component} from 'react';
import Lottery from './Lottery.js';
import './App.css';
class App extends Component {
    render() {
        return(
            <div className="App">
                <Lottery title="Mini Daily" numNalls={4} maxNum={10} /> 
            </div>
        )
    }
}

export default App;