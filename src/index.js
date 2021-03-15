import React from 'react';
import ReactDOM from 'react-dom';
import Proses from './proses';
import {Provider} from "react-redux"
import { store, persistor } from "./reducers/store";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Proses />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

