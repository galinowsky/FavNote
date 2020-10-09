import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types'
// import { ThemeConsumer } from 'styled-components';

import Card from 'components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';


const Articles = ({articles}) => (
  <GridTemplate pageType="articles">
    {articles.map(elem => (
      <Card
        cardType="articles"
        title={elem.title}
        content={elem.content}
        articleUrl={elem.articleUrl}
        created={elem.cretaed}
        key={elem.id}
      />
    ))}
  </GridTemplate>
);
const mapStateToProps = ({articles}) =>({articles})
export default connect(mapStateToProps)(Articles);

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
  )
}
