import React, {useState} from 'react';
import { Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import './login.scss';

const Login = () => {
    const [playerName, setPlayerName] = useState('');
    const history = useHistory();

    const handleClick = ()=>{
        // console.log(playerName);
        sessionStorage.setItem('playerName',playerName);
        history.push('/welcome');
    }

    return (
        <div className='login-container'>
            <h1>【请输入玩家名称】</h1>
            <Input value={playerName} onChange={(e)=>setPlayerName(e.target.value)} />
            <Button type="primary" size='large' shape='round' onClick={handleClick}>进入游戏</Button>
        </div>
    )
};



export default Login