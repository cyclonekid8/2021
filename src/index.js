import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import Login from './components/Login';

ReactDOM.render(<Router><App/></Router>,document.querySelector("#root"));



