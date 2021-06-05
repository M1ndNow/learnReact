# useState



```
import {useState} from 'react';

function App(){
	// state为基本类型
    const [count, setCount] = useState(0);	// 初始化state
    setCount(x=>x+1)	// 更新count的值

	// state为一个对象
    const [obj, setObj] = useState({a:1,b:2});
    setObj({a:a+1, b:b-1})	// 更新obj
    setObj({...obj,a:10})	// 如果只更新obj中的某一个属性值，需要展开对象原来的属性
                            // 因为useState是覆盖式更新状态
    
    // 在一个函数组件中使用多个useState
    const [a,setA] = useState(0);
    const [a2,setA2] = useState(1);	
}

```

