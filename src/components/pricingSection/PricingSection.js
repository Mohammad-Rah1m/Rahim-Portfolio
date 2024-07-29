import React from 'react'
import './PricingSection.css'
import CheckIcon from '../../assets/images/check.svg';
import Button from '../../components/button/Button.js'
export default function PricingSection() {
  return (
    <div className='pricing-container main-container-padding'>
      <div className="pricing-text">
        <h5 className='sub-heading'>Pricing</h5>
        <h2 className='text-white'>Amazing <span className='text-accent-color'>Pricing</span> For Your Projects</h2>
      </div>
      <div className="pricing-cards">
        <div className="pricing-cards-item">
            <div className="pricing-plan">
                <h5 className='text-white'>Basic Plan</h5>
                <p className='text-gray'>WordPress</p>
                <h2 className='text-accent-color'>$39.9 <span>/ per page</span></h2>
            </div>
            <div className="pricing-bullets">
                <div className="pricing-bullets-point">
                    <img src={CheckIcon} alt='check icon'/>
                    <p>Website Design</p>
                </div>
                <div className="pricing-bullets-point">
                    <img src={CheckIcon} alt='check icon'/>
                    <p>Website Development</p>
                </div>
                <div className="pricing-bullets-point in-active">
                    <img src={CheckIcon} alt='check icon'/>
                    <p>Website Responsiveness</p>
                </div>
                <div className="pricing-bullets-point in-active">
                    <img src={CheckIcon} alt='check icon'/>
                    <p>Website Customization</p>
                </div>
            </div>
            <div className="pricing-btn">
                <Button title='Choose Plan'/>
            </div>
        </div>
        <div className="pricing-cards-item">
            <div className="pricing-plan">
                <h5 className='text-white'>Standard  Plan</h5>
                <p className='text-gray'>WordPress</p>
                <h2 className='text-accent-color'>$69.9 <span>/ per page</span></h2>
            </div>
            <div className="pricing-bullets">
                <div className="pricing-bullets-point">
                    <img src={CheckIcon} alt='check icon'/>
                    <p>Website Design</p>
                </div>
                <div className="pricing-bullets-point">
                    <img src={CheckIcon} alt='check icon'/>
                    <p>Website Development</p>
                </div>
                <div className="pricing-bullets-point">
                    <img src={CheckIcon} alt='check icon'/>
                    <p>Website Responsiveness</p>
                </div>
                <div className="pricing-bullets-point in-active">
                    <img src={CheckIcon} alt='check icon'/>
                    <p>Website Customization</p>
                </div>
            </div>
            <div className="pricing-btn">
                <Button title='Choose Plan'/>
            </div>
        </div>
        <div className="pricing-cards-item">
            <div className="pricing-plan">
                <h5 className='text-white'>Premium Plan</h5>
                <p className='text-gray'>WordPress/React</p>
                <h2 className='text-accent-color'>$99.9 <span>/ per page</span></h2>
            </div>
            <div className="pricing-bullets">
                <div className="pricing-bullets-point">
                    <img src={CheckIcon} alt='check icon'/>
                    <p>Website Design</p>
                </div>
                <div className="pricing-bullets-point">
                    <img src={CheckIcon} alt='check icon'/>
                    <p>Website Development</p>
                </div>
                <div className="pricing-bullets-point">
                    <img src={CheckIcon} alt='check icon'/>
                    <p>Website Responsiveness</p>
                </div>
                <div className="pricing-bullets-point">
                    <img src={CheckIcon} alt='check icon'/>
                    <p>Website Customization</p>
                </div>
            </div>
            <div className="pricing-btn">
                <Button title='Choose Plan'/>
            </div>
        </div>
      </div>
    </div>
  )
}
