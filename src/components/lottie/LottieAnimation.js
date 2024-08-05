import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/hero-animation.json';

const LottieAnimation = () => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        // style={{ width: 300, height: 300 }}
        />
    </div>
  );
};

export default LottieAnimation;