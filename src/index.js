import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import combineReducers from "./reducers";

// This functon is same as const logger = fuction(obj , next , action){};
// const logger = function({dispatch , getState }){
//     return function(next){
//         return function(action){
//             console.log(action.type);
//             next(action);
//         }
//     }
// }

// another form for writing middleware
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log(action.type);
    }

    next(action);
  };

// const thunk = ({dispatch , getState }) => (next) => (action) =>{
//         if(typeof action === 'function'){
//             action(dispatch);
//             return;
//         }
//         next(action);
//     }
const store = createStore(combineReducers, applyMiddleware(logger, thunk));
console.log("strore", store);
// export const StoreContext = createContext();

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;

//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }
// console.log(" Before Staate" , store.getState());

// store.dispatch({
//   type : "ADD_MOVIES",
//   movies : [{name : "Avengers"}]
// })
// console.log(" After Staate" , store.getState());

// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }
//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const dataToBePassed = callback(store.getState());
//         return <Component {...dataToBePassed} dispatch={store.dispatch} />;
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => <ConnectedComponent store={store} />}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
