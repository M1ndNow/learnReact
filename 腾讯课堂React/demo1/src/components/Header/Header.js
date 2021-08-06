import React from 'react';
import './Header.scss';



export default class Header extends React.Component{


    render(){
        let {playerName} = this.props;
        return (
            <div className='header'>
                <h1>玩家姓名：{playerName}</h1>
            </div>
        )
    }
}