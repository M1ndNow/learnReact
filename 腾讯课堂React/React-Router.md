# React-Router



### 基本配置

- BrowserRouter/HashRouter
- Switch
- Route：exact / path / component
- Link / NavLink



### 导入包

`npm install react-router-dom --save`

tips: 不能直接安装react-router，因为react-router中没有Link和NavLink组件，需要下载-dom



### 项目目录结构

-src

  --components

  --pages（路由页面）

  --router.js

  --index.js



### router.js

```
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

export default function IRouter(){
    return (
    	<Router>
    	<Switch>
    		<Route exact path='/' component={A}/>
    		<Route path='/B' component={B}/>
    		<Route path='/C' component={C}/>
    	</Switch>
    	</Router>
    )
}


```

- ##### 当使用了Router后，index.js中渲染的不再是App组件，而是要改为Router组件

### Link/NavLink

```
import {Link} from 'react-router-dom'

...
	<Link to="/A">点击跳转到A页面</Link>
	<Link to="/B">点击跳转到B页面</Link>
```



### 路由动态配置

```
// 动态路由匹配
<Route path="/detail/:id" component={example}/>

// 重定向
<Redirect to="/XX"></Redirect>
```





### React Hooks（最新）

#### useState



#### useEffect



#### 路由Hooks

- ##### useParams

```
import {useParams} from 'react-router-dom'

...
const params = useParams();		// 此处的params是一个对象
```



- ##### useHistory

```
import {useHistory} from 'react-router-dom'

...
const history = useHistory();
history.push('/');			// 跳转页面 
```

