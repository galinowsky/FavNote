import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'Routes';
import withContext from 'hoc/withContext';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class DetailsPage extends Component {
  state = {
    activeItem: {
      title:'',
      content:'',
      articleUrl:'',
      twitterName:'',

    },
  };

  componentDidMount() {


if(this.props.activeItem) {
  const [activeItem] = this.props.activeItem;
  this.setState({
    activeItem:  activeItem,
  })
}else {
  const {id} = this.props.match.params;
  console.log('jajczia')
  axios.get(`http://localhost:9000/api/note/${id}`)
  .then(({data}) => this.setState({
    activeItem: data
  }))
  .catch(({err}) => console.log(err))
}



  }

  render() {
    const {pageContext} = this.props.pageContext;
    const {activeItem} = this.state;

    return (
      <DetailsTemplate
        pageType={pageContext}
        title={activeItem.title}
        created={activeItem.created}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

const mapState = (state, ownProps) => {
  if(state[ownProps.pageContext]){
    return {
      activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id),
    };
  }
  return {}

};

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default withContext(connect(mapState)(DetailsPage));
