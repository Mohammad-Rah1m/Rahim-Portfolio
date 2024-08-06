import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/hero-section2.json';

const LottieAnimation = () => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        // style={{ width: 400, height: 300 }}
        />
    </div>
  );
};

export default LottieAnimation;
