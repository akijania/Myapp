import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../../src/redux/cardsRedux.js';

export const mapStateToProps = (state, props) => {
  const searchWord = props.match.params.searchWord;
  return {
    cards: getCardsForSearchResults(state, searchWord),
  };
};

export default connect(mapStateToProps)(SearchResults);
