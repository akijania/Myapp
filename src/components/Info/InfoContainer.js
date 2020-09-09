import {connect} from 'react-redux';
import Info from './Info';

const mapStateToProps = state => ({
  title: state.info.title,
  subtitle: state.info.subtitle,
  image: state.info.image,
});

export default connect(mapStateToProps)(Info);