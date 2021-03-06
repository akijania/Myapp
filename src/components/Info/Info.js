import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero.js';


const Info = ({title, subtitle, image}) => (
  <Container>
    <Hero titleText={title} image={image} />
    <p>{subtitle}</p>
  
  </Container>
);
Info.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  image: PropTypes.node,
};
export default Info;