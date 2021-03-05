import React from 'react';
import {Title} from './Components/title';
import {Sidebar} from './Components/Sidebar';
import {ItemsList} from './Components/Items-List';
import './App.css';

function App() {
  return (
    <div className="App">
        <Title/>
      <main className="App-main-container">
        <Sidebar/>
        <ItemsList/>
      </main>
      <section>

      </section>
    </div>
  );
}

export default App;
