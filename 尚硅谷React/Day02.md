# React-Day02



#### 如何在子组件中更新父组件的状态？

- 子组件中不可以直接改变父组件的状态

- 状态在哪个组件中，更新状态的行为就应该定义在哪个组件中
- 解决方法：父组件定义函数，传递给子组件，子组件调用



#### 表单

```
// 阻止事件的默认行为
event.preventDefault()
```



#### 受控组件与非受控组件

- React中推荐使用受控组件，即不使用原生DOM元素，而使用state存放DOM元素的数据，从而实现对DOM的控制



#### 组件生命周期

- ```
  // 第一次初始化渲染显示：ReactDOM.render()
  constructor()			// 调用组件时执行
  
  componentWillMount()	// 组件挂载前一刻执行
  
  render()				// 插入虚拟DOM时回调
  
  componentDidMount()		// 组件挂载后立刻执行
  
  // 调用this.setState({})
  componentWillUpdate()	// 将要更新
  
  render()				// 更新，重新渲染
  
  componentDidUpdate()	// 已经更新
  
  // 移除组件
  componentWillUnmount()	// 组件卸载前一刻执行
  ```

- ##### 重要的钩子

  ```
  render()		// 初始化渲染或更新渲染时调用
  
  componentDidMount()		// 内部开启监听，或发送ajax请求等
  
  componentWillUnmount()	// 处理收尾工作，如：清理定时器
  
  componentWillReceiveProps()	//
  ```

