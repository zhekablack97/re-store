import React from 'react';
import Spinner from '../Spinner';
import WithBookStoreService from '../hoc/withBookStoreService'

interface IApp {
  bookStoreService: any
}

const App: React.FC<IApp> = ({bookStoreService}) => {

  const a = new bookStoreService()


  console.log(a.getBooks())
  return (
    <div>
      {bookStoreService}
      <Spinner />
    </div>
    
  );
}

export default WithBookStoreService()(App);
