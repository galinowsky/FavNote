import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';
import GridTemplate from '../templates/GridTemplate';

class Articles extends Component {
  componentDidMount() {
    this.props.fetchItems('articles');
  }

  render() {
    const { articles } = this.props;
    return (
      <GridTemplate pageType="articles">
        {/* {console.log(fetchTwitters)} */}
        {articles &&
          articles.map(elem => (
            <Card
              cardType={elem.cardType}
              title={elem.title}
              content={elem.content}
              articleUrl={elem.articleUrl}
              created={elem.cretaed}
              key={elem._id}
              id={elem._id}
            />
          ))}
      </GridTemplate>
    );
  }
}

const mapState = ({ articles }) => ({ articles });

const mapDisptach = {
  fetchItems,
};

export default connect(mapState, mapDisptach)(Articles);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};
