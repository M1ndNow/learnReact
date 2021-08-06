import React,{ useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './welcome.scss';
import { Button } from 'antd';


const Welcome = () => {
    let [playerName, setPlayerName] = useState('');
    const history = useHistory();

    useEffect(()=>{
        if(!sessionStorage.getItem('playerName')){
            history.replace('/')
        }else{
            setPlayerName(sessionStorage.getItem('playerName'));
        }
    },[history])

    return (
        <div className="welcome-container">
            <h1>欢迎你,{playerName}</h1>
            <h1>【请选择关卡】</h1>
            <div className="section-bar">
                <Button type='primary'>关卡一</Button>
                <Button>关卡二</Button>
                <Button>关卡三</Button>
            </div>
        </div>
    );
}

export default Welcome;