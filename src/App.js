import React from "react";

// // 定义子组件
// class LifeCircle extends React.Component {
//   constructor(props) {
//     console.log("进入constructor");
//     super(props);
//     // state 可以在 constructor 里初始化
//     this.state = { text: "子组件的文本" };
//   }
//   // 初始化渲染时调用
//   componentWillMount() {
//     console.log("componentWillMount方法执行");
//   }
//   // 初始化渲染时调用
//   componentDidMount() {
//     console.log("componentDidMount方法执行");
//   }
//   // 父组件修改组件的props时会调用
//   componentWillReceiveProps(nextProps) {
//     console.log("componentWillReceiveProps方法执行");
//   }
//   // 组件更新时调用
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate方法执行");
//     return true;
//   }
//   // 组件更新时调用
//   componentWillUpdate(nextProps, nextState) {
//     console.log("componentWillUpdate方法执行");
//   }
//   // 组件更新后调用
//   componentDidUpdate(nextProps, nextState) {
//     console.log("componentDidUpdate方法执行");
//   }
//   // 组件卸载时调用
//   componentWillUnmount() {
//     console.log("子组件的componentWillUnmount方法执行");
//   }
//   // 点击按钮，修改子组件文本内容的方法
//   changeText = () => {
//     this.setState({
//       text: "修改后的子组件文本"
//     });
//   };
//   render() {
//     console.log("render方法执行");
//     return (
//       <div className="container">
//         <button onClick={this.changeText} className="changeText">
//           修改子组件文本内容
//         </button>
//         <p className="textContent">{this.state.text}</p>
//         <p className="fatherContent">{this.props.text}</p>
//       </div>
//     );
//   }
// }
// // 定义 LifeCircle 组件的父组件
// class LifeCircleContainer extends React.Component {
//   // state 也可以像这样用属性声明的形式初始化
//   state = {
//     text: "父组件的文本",
//     // 新增的只与父组件有关的 state
//     ownText: "仅仅和父组件有关的文本",
//     hideChild: false
//   };
//   // 点击按钮，修改父组件文本的方法
//   changeText = () => {
//     this.setState({
//       text: "修改后的父组件文本"
//     });
//   };
//   // 修改 ownText 的方法
//   changeOwnText = () => {
//     this.setState({
//       ownText: "修改后的父组件自有文本"
//     });
//   };
//   // 点击按钮，隐藏（卸载）LifeCircle 组件的方法
//   hideChild = () => {
//     this.setState({
//       hideChild: true
//     });
//   };
//   render() {
//     return (
//       <div className="fatherContainer">
//           {/* 新的button按钮 */}
//           <button onClick={this.changeOwnText} className="changeText">
//             修改父组件自有文本内容
//           </button>
//           <button onClick={this.changeText} className="changeText">
//             修改父组件文本内容
//           </button>
//           <button onClick={this.hideChild} className="hideChild">
//             隐藏子组件
//           </button>
//           <p> {this.state.ownText} </p>
//           {this.state.hideChild ? null : <LifeCircle text={this.state.text} />}
//           <div>
//           <h1>react 15 生命周期</h1>
          
//           <h2>挂载阶段: </h2>
//           <p>constructor(初始state)</p>
//           <p>componentWillMount(有点多余，后期会废除)</p>
//           <p>render(render不等于reactDom.render 这里并没有真正的渲染页面，只是生成虚拟DOM(reactElement对象)，reactDom.render 的时候才是挂载到真实dom下面)</p>
//           <p>componentDidMount(页面加载完毕，这里可以获取到真实dom，以及发起网络请求)</p>

//           <h2>更新阶段: </h2>
//           <p>componentWillReceiveProps(父组件触发更新。componentWillReceiveProps并不是有 props的改变触发的，而是有父组件的更新(重新渲染)而触发的。父组件的更新包括props的改变和父组件内部state的改变) </p>
//           <p>shouldComponentUpdate(组件自身触发，默认返回true，重渲染。也可以接收最新的props和state，或使用PureComponent进行条件渲染。如果返回false，后续生命周期将不再触发) </p>
//           <p>componentWillUpdate(做一些不涉及真实DOM的准备工作) </p>
//           <p>render</p>
//           <p>componentDidUpdate</p>
          
//           <h2>卸载阶段:</h2>
//           <p>componentWillUnmount(组件被移除或key发生改变时触发)</p>
//           </div>
//       </div>
//     );
//   }
// }
// export default LifeCircleContainer;


// import React from "react";
// // 定义子组件
// class LifeCircle extends React.Component {
//   constructor(props) {
//     console.log("进入constructor");
//     super(props);
//     // state 可以在 constructor 里初始化
//     this.state = { text: "子组件的文本" };
//   }
//   // 初始化/更新时调用
//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps方法执行");
//     return {
//       fatherText: props.text
//     }
//   }
//   // 初始化渲染时调用
//   componentDidMount() {
//     console.log("componentDidMount方法执行");
//   }
//   // 组件更新时调用
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate方法执行");
//     return true;
//   }
//   // 组件更新时调用
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("getSnapshotBeforeUpdate方法执行");
//     return "haha";
//   }
//   // 组件更新后调用
//   componentDidUpdate(nextProps, nextState, valueFromSnapshot) {
//     console.log("componentDidUpdate方法执行");
//     console.log("从 getSnapshotBeforeUpdate 获取到的值是", valueFromSnapshot);
//   }
//   // 组件卸载时调用
//   componentWillUnmount() {
//     console.log("子组件的componentWillUnmount方法执行");
//   }
//   // 点击按钮，修改子组件文本内容的方法
//   changeText = () => {
//     this.setState({
//       text: "修改后的子组件文本"
//     });
//   };
//   onClickFocusUpdate = () => {
//     this.forceUpdate()
//     console.log('forceUpdate 会强制重新渲染，不会触发shouldComponentUpdate');
//   }
//   render() {
//     console.log("render方法执行");
//     return (
//       <div className="container">
//         <button onClick={this.changeText} className="changeText">
//           修改子组件文本内容
//         </button>
//         <button onClick={this.onClickFocusUpdate}>onClickFocusUpdate</button>
//         <p className="textContent">{this.state.text}</p>
//         <p className="fatherContent">{this.props.text}</p>
//       </div>
//     );
//   }
// }
// // 定义 LifeCircle 组件的父组件
// class LifeCircleContainer extends React.Component {
//   // state 也可以像这样用属性声明的形式初始化
//   state = {
//     text: "父组件的文本",
//     hideChild: false
//   };
//   // 点击按钮，修改父组件文本的方法
//   changeText = () => {
//     this.setState({
//       text: "修改后的父组件文本"
//     });
//   };
//   // 点击按钮，隐藏（卸载）LifeCircle 组件的方法
//   hideChild = () => {
//     this.setState({
//       hideChild: true
//     });
//   };
//   render() {
//     return (
//       <div className="fatherContainer">
//         <button onClick={this.changeText} className="changeText">
//           修改父组件文本内容
//         </button>
//         <button onClick={this.hideChild} className="hideChild">
//           隐藏子组件
//         </button>
//         {this.state.hideChild ? null : <LifeCircle text={this.state.text} />}
//       </div>
//     );
//   }
// }
// export default LifeCircleContainer;

// 数据是如何在react组件之间流动的

// 1. 父-子组件通信
// function Child(props) {
//   return (
//     <div className="child">
//       <p>{`子组件所接收到的来自父组件的文本内容是：[${props.fatherText}]`}</p>
//     </div>
//   );
// }

// class Father extends React.Component {
//   // 初始化父组件的 state
//   state = {
//     text: "初始化的父组件的文本"
//   };
//   // 按钮的监听函数，用于更新 text 值
//   changeText = () => {
//     this.setState({
//       text: "改变后的父组件文本"
//     });
//   };
//   // 渲染父组件
//   render() {
//     return (
//       <div className="father">
//         <button onClick={this.changeText}>
//           点击修改父组件传入子组件的文本
//         </button>
//         {/* 引入子组件，并通过 props 下发具体的状态值实现父-子通信 */}
//         <Child fatherText={this.state.text} />
//       </div>
//     );
//   }
// }

// export default Father;

// 2.子-父组件通信
// 考虑到 props 是单向的，子组件并不能直接将自己的数据塞给父组件，但 props 的形式也可以是多样的。假如父组件传递给子组件的是一个绑定了自身上下文的函数，那么子组件在调用该函数时，就可以将想要交给父组件的数据以函数入参的形式给出去，以此来间接地实现数据从子组件到父组件的流动。
// class Child extends React.Component {
//   // 初始化子组件的 state  
//   state = {
//     text: '子组件的文本'
//   }
//   // 子组件的按钮监听函数
//   changeText = () => {
//     // changeText 中，调用了父组件传入的 changeFatherText 方法
//     this.props.changeFatherText(this.state.text)
//   }
//   render() {
//     return (
//       <div className="child">
//         {/* 注意这里把修改父组件文本的动作放在了 Child 里 */}
//         <button onClick={this.changeText}>
//           点击更新父组件的文本
//         </button>
//       </div>
//     );
//   }
// }
// class Father extends React.Component {
//   // 初始化父组件的 state
//   state = {
//     text: "初始化的父组件的文本"
//   };
//   // 这个方法会作为 props 传给子组件，用于更新父组件 text 值。newText 正是开放给子组件的数据通信入口
//   changeText = (newText) => {
//     this.setState({
//       text: newText
//     });
//   };
//   // 渲染父组件
//   render() {
//     return (
//       <div className="father">
//         <p>{`父组件的文本内容是：[${this.state.text}]`}</p>
//         {/* 引入子组件，并通过 props 中下发可传参的函数 实现子-父通信 */}
//         <Child
//           changeFatherText={this.changeText}
//         />
//       </div>
//     );
//   }
// }
// export default Father;

// 兄弟组件通信
// function Child(props) {
//   return (
//     <div className="child">
//       <p>{`子组件所接收到的来自父组件的文本内容是：[${props.fatherText}]`}</p>
//     </div>
//   );
// }
// class NewChild extends React.Component {
//   state = {
//     text: "来自 newChild 的文本"
//   };
//   // NewChild 组件的按钮监听函数
//   changeText = () => {
//     // changeText 中，调用了父组件传入的 changeFatherText 方法
//     this.props.changeFatherText(this.state.text);
//   };
//   render() {
//     return (
//       <div className="child">
//         {/* 注意这里把修改父组件文本（同时也是 Child 组件的文本）的动作放在了 NewChild 里 */}
//         <button onClick={this.changeText}>点击更新 Child 组件的文本</button>
//       </div>
//     );
//   }
// }

// class Father extends React.Component {
//   // 初始化父组件的 state
//   state = {
//     text: "初始化的父组件的文本"
//   };
//   // 传给 NewChild 组件按钮的监听函数，用于更新父组件 text 值（这个 text 值同时也是 Child 的 props）
//   changeText = (newText) => {
//     this.setState({
//       text: newText
//     });
//   };
//   // 渲染父组件
//   render() {
//     return (
//       <div className="father">
//         {/* 引入 Child 组件，并通过 props 中下发具体的状态值 实现父-子通信 */}
//         <Child fatherText={this.state.text} />
//         {/* 引入 NewChild 组件，并通过 props 中下发可传参的函数 实现子-父通信 */}
//         <NewChild changeFatherText={this.changeText} />
//       </div>
//     );
//   }
// }
// export default Father;

// 发布-订阅模式的实现
// class myEventEmitter {
//   constructor() {
//     this.myEvent = {}
//   }
//   on(type, handle) {
//     if (!(handle instanceof Function)) {
//       throw new Error('大哥，请传一个函数啊')
//     }
//     if (!this.myEvent[type]) {
//       this.myEvent[type] = []
//     }
//     this.myEvent[type].push(handle)
//   }
//   emit(type, params) {
//     if (this.myEvent[type]) {
//       this.myEvent[type].forEach(handle => {
//         handle(params)
//       })
//     }
//   }
//   off(type, handle) {
//     if (this.myEvent[type]){
//       this.myEvent[type].splice(this.myEvent[type].indexOf(handle) >>> 0, 1)
//     }
//   }
// }

// const myEvents = new myEventEmitter()

// class B extends React.Component{
//   state = {
//     info: ''
//   }

//   onUpdate = (params) => {
//     this.setState({info: params})
//   }

//   handleOnEvent = () => {
//     myEvents.on('update', this.onUpdate)
//   }

//   render () {
//     return (
//       <div >
//         <button onClick={this.handleOnEvent}>点我监听B</button>
//         <div>A传入的内容为：{this.state.info}</div>
//       </div>
//     )
//   }
// }

// class A extends React.Component{
//   onClick = () => {
//     myEvents.emit('update', '我来自A')
//   }

//   onShow = () => {
//     console.log('myEvents:', myEvents);
//   }
//   render () {
//     return (
//       <div>
//         <button onClick={this.onClick}>点我把state传递给B</button>
//         <button onClick={this.onShow}>显示调用栈</button>
//       </div>
//     )
//   }
// }

// export default class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <B />
//         <A />
//       </div>
//     )
//   }
// }


// Context API
// const themeContext = React.createContext('dark');
// themeContext.displayName = 'themeContext';
// export default function App () {
//   return (
//     <themeContext.Provider value="light">
//       <MyButton></MyButton>
//     </themeContext.Provider>
//   )
// }

// function MyButton () {
//   return (
//     <Button></Button>
//   )
// }

// class Button extends React.Component{
  
//   static contextType = themeContext;
//   render() {
//     return (
//       <div> 
//          <themeContext.Consumer>
//           {value => (
//             <button>{value}</button>
//           )}
//         </themeContext.Consumer>
//         <button>{this.context}</button>
//       </div>
     
//     )
//   }
// }

// export default App;







// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
// const ThemeContext = React.createContext('light');
// ThemeContext.displayName = 'ThemeContext'
// const ThemeContext2 = React.createContext('light2');
// class App extends React.Component {
//   render() {
//     // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
//     // 无论多深，任何组件都能读取这个值。
//     // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
//     return (
//       <ThemeContext.Provider value='dark'>
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
// }

// // 中间的组件再也不必指明往下传递 theme 了。
// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   // 指定 contextType 读取当前的 theme context。
//   // React 会往上找到最近的 theme Provider，然后使用它的值。
//   // 在这个例子中，当前的 theme 值为 “dark”。
//   static contextType = ThemeContext;
//   // 当没有匹配到Provider时，其defaultValue才生效
//   // static contextType = ThemeContext2; // 此时context为light2
  
//   render() {
//     return <button>{this.context}</button>;
//   }
// }

// export default App;




import Layouts from './layouts/';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Layouts>
        
        </Layouts>
      </React.Fragment>
    )
  }
}

export default App;