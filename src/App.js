import React from 'react';
import {Title} from './Components/Title';
import {Sidebar} from './Components/Sidebar';
import {ItemsList} from './Components/Items-List';
import {SocialInnovation} from './Components/socialinnov';
import {Bottom} from './Components/Bottom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Title/>
      <main className="App-main-container">
        <Sidebar/>
        <ItemsList/>
        <SocialInnovation/>
      </main>
      <section>
        <Bottom/>
      </section>
    </div>
  );
}

export default App;
