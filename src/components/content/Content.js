import React from 'react';
import './Content.scss';
import Banner from '../banner/Banner';
import Key from '../key/Key';
import Contact from '../contact/Contact';
import Stages from '../stages/Stages';

function Content(){
  return(
    <main className="content">
      <Banner />
      <Key />
      <Stages />
      <Contact />
    </main>
  )
}

export default Content;