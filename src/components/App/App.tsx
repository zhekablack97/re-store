import React from 'react';
import Spinner from '../Spinner';
import WithBookStoreService from '../hoc/withBookStoreService'
import { BookStoreService } from '../../services/bookStoreServices';

interface IApp {
  bookStoreService: BookStoreService
}

const App: React.FC<IApp> = ({bookStoreService}) => {

  

  console.log(bookStoreService.getBooks())

  return (
    <div>
      {/* {bookStoreService} */}
      <Spinner />
    </div>
    
  );
}

export default WithBookStoreService()(App);
