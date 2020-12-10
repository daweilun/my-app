// 06. React-Hooks 设计动机与工作模式（上）
// import React from 'react';

// class ProfilePageClass extends React.Component {
//   showMessage = () => {
//     alert("Followed " + this.props.user);
//   };

//   handleClick = () => {
//     setTimeout(this.showMessage, 3000);
//   };

//   render() {
//     return <button onClick={this.handleClick}>Follow</button>;
//   }
// }

// function ProfilePageFunction(props) {
//   const showMessage = () => {
//     alert('Followed ' + props.user);
//   };

//   const handleClick = () => {
//     setTimeout(showMessage, 3000);
//   };

//   return (
//     <button onClick={handleClick}>Follow</button>
//   );
// }

// class App extends React.Component {
//   state = {
//     user: 'Dan',
//   };
//   render() {
//     return (
//       <>
//         <label>
//           <select
//             value={this.state.user}
//             onChange={e => this.setState({ user: e.target.value })}
//           >
//             <option value="Dan">Dan</option>
//             <option value="Sophie">Sophie</option>
//             <option value="Sunil">Sunil</option>
//           </select>
//         </label>
//         <h1>Welcome to {this.state.user}’s profile!</h1>
//         <p>
//           <ProfilePageFunction user={this.state.user} />
//           <b> (function)</b>
//         </p>
//         <p>
//           <ProfilePageClass user={this.state.user} />
//           <b> (class)</b>
//         </p>
//       </>
//     )
//   }
// }

// export default App;

// 类组件和函数式组件的区别
// 一：代码层面
// 1. 类组件要继承class，函数式组件不用
// 2. 类组件拥有生命周期，函数式组件没有
// 3. 类组件可以定义并维护state，函数式组件不能
// 4. 类组件可以获取到实例化后的this，并做各种各样的事，函数式组件不可以
// 二：心智模式层面上的差异（函数式组件可以捕获render内部的状态，这是最大的不同）
// 1. 类组件偏向于面向对象思想，功能齐全，
// 2. 函数式组件是函数式编程思想，它比较符合React的设计理念

// 理解函数式组件可以捕获render内部的状态
// 类似微博的点击关注功能，点击关注某人之后，弹出已关注某人的提醒。

// 在类组件中，this是可变的，对this.props的每次调用都会获取最新的props，这是React保证数据实时性的一个重要手段。
// 上面那个例子中，我们将渲染延迟了3秒，打破了this.props和渲染动作之间的这种时机上的关联，导致我们弹出的被关注者是更新之后的数据

// 在函数式组件中，props会在ProfilePageFunction函数被执行的那一瞬间就被捕获，而props又是不可变的，这样我们就能保证从现在开始，任何时机下读取到的props，都是我们最初捕获的那个props
// 当父组件传入新的props来尝试重新渲染组件时，相当于对ProfilePageFunction函数的重新调用，并不会影响上一次调用对上一个props的捕获

// 这也进一步说明了函数式组件真正的把数据和渲染绑定到了一起，React-Hooks便应运而生

// Hooks的本质：
// 帮助函数式组件补全相对于类组件上缺失的能力


// 07. React-Hooks 设计动机与工作模式（下）

// useState:
// import React, { useState } from 'react';
// export default function App () {
//   const [text, setText] = useState('修改前的文本');
//   function onChangeText () {
//     return setText('修改后的文本')
//   }
//   return (
//     <div>
//       <div>{text}</div>
//       <button onClick={onChangeText}>修改text</button>
//     </div>
//   )
// }

// useEffect(): 允许函数组件执行副作用操作
// 接受两个参数，分别为回调函数和依赖数组
// useEffect调用规则：
// 1. 仅有一个回调函数：每一次都执行副作用
// 2. 仅有一个回调函数，并返回一个函数：每一次渲染都触发，且卸载阶段也会被触发（回调函数中放回的函数被称为“清除函数”，在卸载阶段触发）
// 3. 回调函数和空数组：仅在挂载阶段执行一次
// 4. 回调函数和空数组，并返回一个函数：仅在挂载阶段和卸载阶段执行一次
// import React, { useState, useEffect } from 'react';
// export default function IncreasingTodoList () {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const ul = document.getElementById('ul');
//     const item = document.createElement('li')
//     item.innerHTML = `我是第${count}个待办事件`;
//     ul.appendChild(item)
//     return () => {
//       console.log(12);
//     }
//   })

//   return (
//     <div>
//       <div id="ul"></div>
//       <button onClick={() => setCount(count + 1)}>add todo</button>
//     </div>
//   )
// }

// import React from 'react';
// // 定义类组件
// export default class IncreasingTodoList extends React.Component {
//   // 初始化 state
//   state = { count: 0 }
//   // 此处调用上个 demo 中 useEffect 中传入的函数
//   componentDidMount() {
//     this.addTodoItem()
//   }
//   // 此处调用上个 demo 中 useEffect 中传入的函数
//   componentDidUpdate() {
//     this.addTodoItem()
//   }
//   // 每次 count 增加时，都增加对应的待办项
//   addTodoItem = () => {
//     const { count } = this.state
//     const todoList = document.getElementById("todoList")
//     const newItem = document.createElement("li")
//     newItem.innerHTML = `我是第${count}个待办项`
//     todoList.append(newItem)
//   }
//   // 定义渲染内容
//   render() {
//     const { count } = this.state
//     return (
//       <div>
//         <p>当前共计 {count} 个todo Item</p>
//         <ul id="todoList"></ul>
//         <button
//           onClick={() =>
//             this.setState({
//               count: this.state.count + 1,
//             })
//           }
//         >
//           点我增加一个待办项
//         </button>
//       </div>
//     )
//   }
// }


// 08 | 深入 React-Hooks 工作机制：“原则”的背后，是“原理”
import React, { useState } from 'react';
let isMounted = false;

export default function Hooks () {
  let name, setName, age, setAge;
  if (!isMounted) {
    // eslint-disable-next-line
    [name, setName] = useState('修言');
    isMounted = true;
  }
  [age, setAge] = useState('99');
  return (
    <div>
      {name ? <div>名字： {name}</div> : null}
      <div>年龄： {age}</div>
      <button onClick={() => setAge('9')}>修改年龄</button>
    </div>
    
  )
} 

