import React from 'react';
import { BookSearch } from './components/BookSearch/BookSearch';
import './styles/App.scss';


function App() {

  return (
    <div>
      <header className="header">
        <div className="header--content">
          <h1>My Good Reads</h1>
        </div>
      </header>
      <main>
        <BookSearch />
      </main>

    </div>
  );
}

export default App;