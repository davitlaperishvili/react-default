import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/rootReducer";

const windowObject: any = {...window}
let store = createStore(rootReducer, compose(applyMiddleware(thunk), windowObject.__REDUX_DEVTOOLS_EXTENSION__ ? windowObject.__REDUX_DEVTOOLS_EXTENSION__() : (f:any) => f));


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode >
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
export { store };
