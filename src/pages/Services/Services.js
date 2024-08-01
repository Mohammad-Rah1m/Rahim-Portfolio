import React from 'react'
import Header from '../../components/pageHeader/PageHeader.js'
import MyServices from '../../components/servicesSection/ServicesSection.js'
import Pricing from '../../components/pricingSection/PricingSection.js'
import SecondaryHeader from '../../components/secondaryHeader/SecondaryHeader.js'
import SecondaryImage from '../../assets/images/Services.png'

export default function Services() {
  return (
    <div className='my-services'>
      <Header title="Services"/>
      <SecondaryHeader SecondaryHeaderImage={SecondaryImage} SubHeading='What I Do' BeforeSpanHeading='Real' InsideSpanHeading='Problem Solutions' AfterSpanHeading='Experience' SecondaryHeaderDescription='I offer a comprehensive range of services tailored to meet your digital needs. From custom website development to innovative web design, I transform your vision into a compelling online presence.' ButtonTitle='Contact Me'/>
      <MyServices/>
      <Pricing/>
    </div>
  )
}
