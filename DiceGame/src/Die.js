import React,{Component} from 'react';
import './Die.css';
class Die extends Component {
    render(){
        //console.log(this.props);
        let {num,rolling}=this.props;
        //console.log(num);
        let append="";
        if(num===1) append="one";
        else if(num===2) append="two";
        else if(num===3) append="three";
        else if(num===4) append="four";
        else if(num===5) append="five";
        else append="six"
        let result="fas fa-dice-"+append;
        if(this.props.rolling) result+=" "+"shaking";
        console.log(result);
        return ( 
            
                <i className={result}></i> 
        )
    }
}

export default Die;