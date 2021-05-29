# React-Day05



#### 组件间通信

- ##### 通过props传递

  - 共有的数据放在父组件上，特有数据放在当前组件的state中
  - 单向数据流，（父->子）逐层传递
  - 一般数据：父组件传递给子组件，子组件读取数据
  - 函数：子组件传递数据给父组件，子组件调用函数

- ##### 使用消息订阅（subscribe)-发布(publish)机制

  - 需要借助PubSubJS库

    - npm install pubsub-js --save
    - 使用：

    ```
    import PubSub from 'pubsub-js';		// 引入
    PubSub.subscribe('事件名', function(msg,data){...})	// 订阅，最好使用箭头函数
    PubSub.publish('事件名', data)		// 发布消息，data可传递一个对象
    ```

  - 好处：

    - 方便多层次间通信
    - 方便兄弟组件间通信

  - ##### 问题：

    - 在何处订阅？（componentDidMount()中，组件只要已挂载就订阅事件）
    - 在何处发布？（触发事件的地方，如点击事件、请求事件）

- ##### 使用redux





#### Redux

- 下载：npm install --save redux
- 使用：

```

```

- ##### ActionCreators

  - 理解：
    - 一个工厂函数，内部包含描述行为的函数，这些函数均返回一个对象{type:'actionType', data:{}}
    - 描述要执行的行为类型(type)并携带数据(data)

```

```

- ##### Store

  - 理解：
    - 存放所有的状态，dispatch需要对state进行的操作
    - 有点类似于一个数据库

```
// 使用
import {createStore} from 'redux';
import counter from './reducers/counter'
const store = createStore(counter)		// 初始化store

store.subscribe()	// 订阅，当store中的state更新时，调用回调函数，可放render进行重绘
```

- ##### Reducers

  - 理解：
    - 对Store中的state进行操作
      - 获取oldState：getState()
      - 更新newState：setState()

```

```



#### 使用Redux的问题

- 默认不支持异步操作
  - 解决：使用异步中间件,即redux插件：redux-thunk
    - npm install --save redux-thunk
  - 