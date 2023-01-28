import React ,{useState , useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './form';
import reportWebVitals from './reportWebVitals';
import NiceModal from '@ebay/nice-modal-react';
ReactDOM.render(
  <React.StrictMode>
    <NiceModal.Provider>
      <Form />
    </NiceModal.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
