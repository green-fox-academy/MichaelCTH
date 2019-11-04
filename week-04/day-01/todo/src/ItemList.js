import React, { Component } from 'react';

class ItemList extends Component {
    constructor(props){
        super(props);
        this.props.data.sort((a,b)=> a.prio - b.prio);
    }

    buttonClick(e){
        this.props.clickMethod(e.target.id);
    }

    render() { 
        return ( 
            <>
            <h1>{this.props.name}</h1>
            <ul>
                {this.props.data.map((item)=>{
                    return <li key={item.text}>{item.text}<input id={item.text} type="submit" value={this.props.action} onClick={this.buttonClick.bind(this)} /></li>
                })}
            </ul>
            </>
         );
    }
}
 
export default ItemList;