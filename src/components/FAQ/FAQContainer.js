import {connect} from 'react-redux';
import FAQ from './FAQ';

const mapStateToProps = state => ({
  title: state.faq.title,
  question: state.faq.question,
  answer: state.faq.answer,
  image: state.faq.image,
});

export default connect(mapStateToProps)(FAQ);