import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';


class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  };
  render() {
    const { cards } = this.props;
    return (
      <section>
        <Container>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))} 
        </Container>
      </section>
    );
  }
}
export default SearchResults;
