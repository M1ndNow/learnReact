# useEffect

```javascript
import {useEffect} from 'react';

function App(){

	useEffect(()=>{
		...
	},[])		// 第二个参数传入空数组，此时useEffect相当于componentDidMount
				// 即函数组件初始化时，执行回调函数
	
	useEffect(()=>{
		...
	},[a,b,c])	// 监听a,b,c的变化，此时useEffect相当于componentDidUpdate
				// 即a,b,c 的值发生改变时，执行回调函数
	
	
	useEffect(()=>{
		...
		return (
			...
		)
	},[])		// 使用return()，表示useEffect相当于componentWillUnmount
				// 即函数组件即将销毁时，执行回调函数
				
	// 组合使用
	useEffect(()=>{
		...
		return (
			...
		)
	},[a,b,c])
}
```

