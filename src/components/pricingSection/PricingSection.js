import React, { useState } from 'react';
import './PricingSection.css'
import CheckIcon from '../../assets/images/check.svg';
// import Button from '../../components/button/Button.js'
import {useDispatch } from 'react-redux'
import { incrementByPrice } from '../../redux/cartSlice.js'

export default function PricingSection() {
  const dispatch = useDispatch();
  const basicPrice=100;
  const standardPrice=200;
  const premiumPrice=300;
  const [IsDisabled, setIsDisabled] = useState(false);
  const handleClick = (plan) => {
    if(plan==='basic'){
        dispatch(incrementByPrice(basicPrice)); // Dispatch the action
    }
    else if (plan==='standard'){
        dispatch(incrementByPrice(standardPrice));
    }
    else {
        dispatch(incrementByPrice(premiumPrice));
    }
    setIsDisabled(true); // Disable the button after it's clicked
  };

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
                <h2 className='text-accent-color'>${basicPrice} <span>/ per page</span></h2>
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
                <button
                    aria-label="Increment value"
                    onClick={() => handleClick('basic')}
                    disabled={IsDisabled}
                    className={IsDisabled ? 'button-disabled' : 'button-active'} 
                    >
                    Choose Plan
                </button>
            </div>
        </div>
        <div className="pricing-cards-item">
            <div className="pricing-plan">
                <h5 className='text-white'>Standard  Plan</h5>
                <p className='text-gray'>WordPress</p>
            <h2 className='text-accent-color'>${standardPrice} <span>/ per page</span></h2>
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
            <button
                    aria-label="Increment value"
                    onClick={() => handleClick('standard')}
                    disabled={IsDisabled}
                    className={IsDisabled ? 'button-disabled' : 'button-active'} 
                    >
                    Choose Plan
                </button>
            </div>
        </div>
        <div className="pricing-cards-item">
            <div className="pricing-plan">
                <h5 className='text-white'>Premium Plan</h5>
                <p className='text-gray'>WordPress/React</p>
                <h2 className='text-accent-color'>${premiumPrice} <span>/ per page</span></h2>
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
                <button
                    aria-label="Increment value"
                    onClick={() => handleClick('premium')}
                    disabled={IsDisabled}
                    className={IsDisabled ? 'button-disabled' : 'button-active'} 
                    >
                    Choose Plan
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}
