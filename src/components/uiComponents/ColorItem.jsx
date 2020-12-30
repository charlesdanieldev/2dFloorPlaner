import React, { Component } from 'react';

class ColorItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let { color, onClick } = this.props;
        let style ={backgroundColor : color,borderRadius:8 ,width:60 ,height:60 ,margin:4,}
        console.log(color);
        return ( <p style={style}
        onClick={()=>onClick(color)}
        >
        </p> );
    }
}
 
export default ColorItem;