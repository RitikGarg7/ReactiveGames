import React,{Component} from 'react'; 
import './Coin.css';
export default class Coin extends Component {
 

    render() {
        let choice=this.props.face; 
        let headsrc="https://en.numista.com/catalogue/photos/inde/2409-original.jpg";
        let tailsrc="https://qph.fs.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26";
        return (
            <div className="Coin">
                <img src={choice===0?tailsrc:headsrc}></img>
            </div>
        )
    }
}