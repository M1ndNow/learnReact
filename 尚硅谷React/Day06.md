# React-Day06



### react-router (4.X)



#### SPA应用（Single Page Web Application）

- 整个应用只有一个完整的页面
- 点击页面中的链接不会刷新页面，点击本身也不会向服务器发送请求
- 点击路由链接时，只会做页面的局部更新
- 数据都使用ajax请求获取，在前端异步展现



#### 路由

- 什么是路由
  - 一个路由就是一个映射关系（key：value）
  - key为路由路径，value可以是一个function/component
- 路由分类
  - 后台路由：node服务器端路由，value是一个function，用来处理客户端提交的请求并返回一个响应数据
  - 前台路由：浏览器端路由，value是一个component，当请求的是路由path时，浏览器端没有发送请求，但界面会更新显示对应的组件
- 后台路由
  - 注册路由：router.get(path, fucntion(req, res))
- 前台路由
  - 注册路由：<Route path="/about" component={About}/>
  - 当浏览器的hash变成#about时，当前路由组件就会变成About组件
- 前端路由的实现
  - history库



#### react-router

##### 组件

- <BrowserRouter>

- <HashRouter>

- <Route>

- <Redirect>

- <Link>

- <NavLink>

  ```
  import {NavLink} from 'react-router-dom'
  
  <NavLink to='./pagePath'>XXX</NavLink>
  ```

- <Switch>

  ```
  import {Switch,Route, Redirect} from 'react-router-dom'
  
  <Switch>
  	<Route path='./A' component={组件名称}/>
  	<Route path='./B' component={组件名称}/>
  	<Redirect to='./A'/>
  </Switch>
  ```

  

##### 对象

- history对象
- match对象
- withRouter函数



##### 实践

- 下载安装：

  - npm install --save react-router-dom
  - -dom 表示浏览器端版本

  

- 路由组件如何传参数？
  - 调用this.props.math.params
  - history



#### 使用步骤

1. 定义路由组件
2. <Link/>、<NavLink/>



#### Ant-Design 蚂蚁组件库