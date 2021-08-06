# react-router-dom



### 路由

<Switch>

​	<Route exact path="/">

​		<ComponentA/>

​	</Route>

​	<Route path="/">

​		<ComponentB/>

​	</Route>

​	<Route path="*">

​		<ComponentDefault/>

​	</Route>

</Switch>

### 链接：

<Link to={path}>



### 路由——重定向

import {useHistory} from 'react';

const history = useHistory();

返回：history.push(-1)

重定向：history.push("/path")

可用于点击事件等



### 路由——传参

/path/:id	此处id可为动态的

获取参数：

import useParam from "react-router-dom";

const {id} = useParam();

此处id对应url传递过来的id

