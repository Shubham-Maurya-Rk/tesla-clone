import React from 'react';
import styled from 'styled-components';
import Section from './Section';


function Home() {
  return (
    <Container>
        <Section bgimg="model-s.jpg" title="Model S" desp="Order now to get it as soon as possible"/>
        <Section bgimg="model-y.jpg" title="Model Y" desp="Order now to get it as soon as possible"/>
        <Section bgimg="model-x.jpg" title="Model X" desp="Order now to get it as soon as possible"/>
        <Section bgimg="model-3.jpg" title="Model 3" desp="Order now to get it as soon as possible"/>
        <Section bgimg="solar-panel.jpg" title="Solar Panel" desp="Lowest cost solar panel in India"/>
        <Section bgimg="solar-roof.jpg" title="Solar For New Roofs" desp="Lowest cost solar roof in India"/>
        <Section bgimg="accessories.jpg" title="Accessories"/>
    </Container>
  )
}

export default Home;
const Container=styled.div`

`