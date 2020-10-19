import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'Routes';
import withContext from 'hoc/withContext';


class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    // console.log(this.props)
    const { match } = this.props;

    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        console.log('Something went wrong with matching paths');
    }




  }

  render() {
    const dummyArticle = {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'hello_roman',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    };
 console.log(this.props)
    const { pageType } = this.state;
    const [Item] = this.props.activeItem;
    return (
      <DetailsTemplate
        pageType={pageType}
        title={Item.title}
        created={Item.created}
        content={Item.content}
        articleUrl={Item.articleUrl}
        twitterName={Item.twitterName}
      />
    );
  }
}

const mapState = (state, ownProps) => {
  console.log({state, ownProps})
  return {

 activeItem: state[ownProps.pageContext]
 .filter(item => item._id === ownProps.match.params.id)
}}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default withContext(connect(mapState)(DetailsPage));
