import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from "redux";
import {Provider} from "react-redux";
import tasks from "./reducers"
import App from './App';
import reportWebVitals from './reportWebVitals';


const store = createStore(tasks);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
