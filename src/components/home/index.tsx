import React from "react"

import Banner from "./Banner"
import Features from "./Features"
import Graph from "./Graph"
import LegacyGateway from "./Benefits"
import MoreFeatures from "./MoreFeatures"
import Partners from "./Partners"
import Discover from "../shared/Discover"
import Configuration from "./Configuration"
import Playground from "./Playground"
import Customer from "./Customers"

const HomePage = (): JSX.Element => {
  console.log(process.env.TESTIMONIALS);
  
  return (
    <div className="">
      <Banner />
      <Configuration />
      { process.env.TESTIMONIALS!=="OFF" && <Customer /> }
      <LegacyGateway />
      <Graph />
      {/* <Playground /> */}
      <Discover />
    </div>
  )
}

export default HomePage
