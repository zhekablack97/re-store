import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { BookStoreServiceProvider } from '../BookStoreServiceContext';
import ErrorBoundry from '../ErrorBoundry';
import store from '../../store';
import styles from './App.module.scss';
import Spinner from '../Spinner';
import { bookStoeService } from '../../services/bookStoreServices';



const App = () => {
  return (
    <div>
      <Spinner />
    </div>
    
  );
}

export default App;
