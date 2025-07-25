import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Home() {
  return (
    <Components>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Cutomer Order"
        rightBtnText="Existing Inventory"
      />
      <Section
      title="Model Y"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-y.jpg"
      leftBtnText="Cutomer Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Model 3"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-3.jpg"
      leftBtnText="Cutomer Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Model X"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-x.jpg"
      leftBtnText="Cutomer Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Lowest Cost Solar Panels in America"
      description="Money-back gurantee"
      backgroundImg="solar-panel.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
      />
      <Section
      title="Solar for New Roofs"
      description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
      backgroundImg="solar-roof.jpg"
      leftBtnText="order now"
      rightBtnText="Learn More"
      />
      <Section
      title="Accessories"
      description=""
      backgroundImg="accessories.jpg"
      leftBtnText="Shop now"
      />
      
      
      
      
    </Components>
  )
}

export default Home;

const Components =styled.div`
height:100vh;
` 