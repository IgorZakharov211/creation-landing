import React from 'react';
import './Content.scss';
import Banner from '../banner/Banner';
import Key from '../key/Key';
import Contact from '../contact/Contact';
import Stages from '../stages/Stages';
import StagesMobile from '../stages-mobile/StagesMobile';

function Content(){
  return(
    <main className="content">
      <Banner />
      <Key />
      <Stages />
      <StagesMobile />
      <Contact />
    </main>
  )
}

export default Content;