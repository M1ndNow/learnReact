# Redux



### reducer

`reducer`函数用来告知`store`如何响应一个被`dispatch`过来的`action`

`reducer`将`state`和`action`作为参数，并且总是返回一个新的`state`，这是reducer的唯一作用

`reducer`是一个接收状态和动作，然后返回新状态的**纯函数**（不能用来调API等存在副作用的行为）

##### 示例

```
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // 修改这行下面的代码
  switch(action.type){
    case 'LOGIN':{
      return {
        authenticated: true
      }
    }
    case 'LOGOUT':{
      return {
        authenticated: false
      }
    }
    default:
      return state
  }
  // 修改这行上面的代码
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```



### 发布与订阅

`store.subscribe()`参数是一个回调函数，`store`每次收到一个`action`时，都会调用这个函数



### 组合多个reducer

`combineReducers()`，接收一个对象作为参数,

##### 示例

```
const rootReducer = Redux.combineReducers({		// Redux 将使用给定的键值作为关联状态的名称
  auth: authenticationReducer,
  notes: notesReducer
});
```





### 中间件Redux Thunk

用来处理Redux应用程序中的异步请求



### state永不改变

不可变状态意味着永远不直接修改状态，而是返回一个新的状态副本。

##### 示例

```
const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // 这里不能修改 state，否则测试不能通过
      return [...state,action.todo];	//这里不能直接修改state，而应该返回一个新的state副本
    default:
      return state;
  }
};
```



### Object.assign()的使用

```
let newObj = Object.assign({},obj1,obj2)

// 返回一个新对象{}，其中包含obj1和obj2的属性，obj2中的属性会覆盖obj1中相同的属性
```





### Provider

`Provider`用于连接Redux和React

`Provider`是 React Redux 包装 React 应用的 wrapper 组件， 

它**允许访问整个组件树中的 Redux `store` 及 `dispatch`（分发）方法**

