# React-Day01

- 虚拟DOM，不直接操作DOM

- DOM Diff算法，最小化页面重绘

- ````
  React.createElement() // 创建的是一个虚拟DOM,最终会转换成一个真实的DOM
  
  debugger 调试
  
  
  ````

- 更新虚拟DOM时不会更新页面，重新渲染时(render)才会

- 

- JSX  (javascript XML)   使用 babel转换为js代码

- ```
  ReactDOM.render(virtualDOM, containerDOM)
  ```

- 

- #### Component

  - **函数组件**

    - ```javascript
      function AFun(){
        return <h1>Hello, React!</h1>;
      }
      ```

  - **类组件**

    - ```javascript
      class BF extends React.Component{
      	// 有constructor
      	constructor(props){
      		super(props);
      		this.state = {} // 初始化state
      	}
      	
      	// 有一些methods
      	
      	// override render()
      	render(){
      		return ...;
      	}
      }
      ```

    - 



- 

- #### state、props、refs和事件处理

- ```javascript
  state 组件内部状态
  
  // state更新时，组件自动重新渲染
  // 使用this.setState({}) 改变state
  ```

- ```javascript
  props 传递数据
  
  // 函数组件中使用props
  function funComponent(props){
  	return <h1>{props.msg}</h1>;
  }
  
  // 类组件中使用props
  class ClassComponent extends React.Component{
  	// ...
  	render(){
  		return <h1>{this.props.msg}</h1>;	// this是必须的
  	}
  }
  
  // 渲染到页面
  ReactDOM.render(<funComponent msg="hahaha"/>,document.getElementById('example'));
  ReactDOM.render(<ClassComponent msg="hahaha"/>,document.getElementById('example'));
  
  
  // 指定props默认值
  ComponentName.defaultProps = {}
  
  // 指定props类型和必要性(isRequired)----如果未按照要求传入props会弹出warning
  ComponentName.propTypes = {}
  
  ```

- ```javascript
  refs和事件处理
  
  
  // refs的使用 --- 作用：标识组件内部的元素
  // 旧
  <input type="text" ref="content"/>
  // 新（推荐使用）--- 使用回调函数指定ref
  <input type="text" ref={input=>this.inputNode = input}/>
      
  // 事件处理
  <button onClick={this.handleClick}>Click</button>   // onClick  Click必须大写
  
  ```

- 

- #### 功能界面的组件化编码流程

  1. 拆分组件：拆分界面，抽取组件
  2. 实现静态组件：使用组件实现静态页面效果
  3. 实现动态组件：
     1. 动态显示初始化数据
     2. 交互功能（从绑定事件监听开始）

-  

-  

- 