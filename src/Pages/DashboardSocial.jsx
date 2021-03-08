import React from 'react';
import {Title} from '../Components/Title';
import {Sidebar} from '../Components/Sidebar';
import {SocialInnovation} from '../Components/SocialInnovation';
import {Bottom} from '../Components/Bottom';
import './Dashboard.css';

export const DashboardSocial = () =>{
    return (
        <div className="App">
        <Title/>
      <main className="App-main-container">
        <Sidebar/>
        <SocialInnovation/>
      </main>
      <section>
        <Bottom/>
      </section>
    </div>
    )
}