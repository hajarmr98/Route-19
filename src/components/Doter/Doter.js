import React, {Component} from 'react';
import './Doter.css'


class Doter extends Component {
    constructor(props){
        super(props);
        this.state = {
            dots: [...Array(this.props.length)]
        }
    }

    render(){
        return(
            <section className="section">
                {/* <div className="dot selected-dot"></div>
                <div className="dot"></div>
                <div className="dot"></div> */}
                {this.state.dots.map((e, index) => index === this.props.step ? <div key={index} className="dot selected-dot"></div> : <div key={index} className="dot"></div>)}
            </section>
        )
    }
}

export default Doter