import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero.js';

const FAQ = ({title, image, question, answer}) => (
  <Container>
    <Hero titleText={title} image={image} />
    <h2>{question}</h2>
    <p>{answer}</p>
  </Container>
);
FAQ.propTypes = {
  title: PropTypes.node,
  question: PropTypes.node,
  answer: PropTypes.node,
  image: PropTypes.node,
};
export default FAQ;