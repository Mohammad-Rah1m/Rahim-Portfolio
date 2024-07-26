import React from 'react';
import Marquee from 'react-marquee-slider';
import styled from 'styled-components';
import AAOG from '../../assets/images/projects/AAOG.jpg';
import LightPlanet from '../../assets/images/projects/Light-Planet.jpg';
import LocalGrowth from '../../assets/images/projects/Local-growth.jpg';
import Lubu from '../../assets/images/projects/Lubu.jpg';
import WooflyBox from '../../assets/images/projects/Woofly-Box.jpg';

const images = [
  AAOG,
  LightPlanet,
  LocalGrowth,
  Lubu,
  WooflyBox,
];

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

const Image = styled.img`
  max-height: 200px;
  width: auto;
  border-radius: 10px;
`;

const MarqueeComponent = () => {
  return (
    <Marquee velocity={25} minScale={0.7} resetAfterTries={200} scatterRandomly>
      {images.map((image, index) => (
        <ImageContainer key={index}>
          <Image src={image} alt={`Project ${index + 1}`} />
        </ImageContainer>
      ))}
    </Marquee>
  );
};

export default MarqueeComponent;
