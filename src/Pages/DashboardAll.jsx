import React from 'react';
import {Title} from '../Components/Title';
import {Sidebar} from '../Components/Sidebar';
import {ItemsList} from '../Components/Items-List';
import {Bottom} from '../Components/Bottom';
import './Dashboard.css';

export const DashboardAll = () =>{
    return (
        <div className="App">
        <Title/>
      <main className="App-main-container">
        <Sidebar/>
        <ItemsList/>
      </main>
      <section>
        <Bottom/>
      </section>
    </div>
    )
}