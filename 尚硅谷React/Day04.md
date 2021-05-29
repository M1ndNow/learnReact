# React-Day04



#### 给组件类指定属性类型

```
import PropTypes from 'prop-types'  
// 'prop-types'包需要另外引入  npm install --save prop-types

static propTypes = {
	a: PropTypes.XXX.(isRequired)		// isRequired可选
}
```



#### 遍历数组，生成JSX

- 使用Array.map((item, index) => <ComponentName ... />)



#### Array.splice()的使用

```
Array.splice()  // 增、删、改都可用该api

let arr = [1,2]

// 增加
arr.splice(0,0,3,4)		// 在0位置处，删除0个元素，添加3和4
arr // [3,4,1,2]

// 删除
arr.splice(1,1)			// 在1位置处，删除1个元素
arr // [3,1,2]

// 替换
arr.splice(1,1,5)		// 在1位置处， 删除1个元素，添加5
arr //[3,5,2]
```



#### 踩坑

```
onClick={this.func}   
// func只能是一个回调函数，不能使用func()   
// 若使用func()，相当于直接在render()中调用func()函数，产生报错
```





#### React ajax

- 使用axios

  - 轻量级
  - promise风格
  - 浏览器端和node服务器端都可以用

- 使用fetch

  - 原生函数，但老版本的浏览器不支持（需引入兼容库fetch.js）
  - 不再使用XmlHttpRequest对象提交ajax请求

- 在componentDidMount()中发送异步ajax请求（为什么？）

  ```
  // axios方式
  axios.get(url)
  	 .then(response => {
  	 	const res = response.data;
  	 })
  	 .catch(error =>{
  	 	alert(error.message);
  	 })
  	 
  	 
  // fetch方式
  fetch(url).then(function(response){
  	return response.json();
  }).then(function(data){
  	...
  }).catch(function(e){
  	...
  })
  ```

  

- 



