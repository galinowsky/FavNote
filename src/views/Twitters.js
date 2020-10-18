import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from '../templates/GridTemplate';

const Twitters = ({twitters}) => (
  <GridTemplate pageType="twitters">
  {twitters && twitters.map(elem => (
  <Card
    id = {elem.id}
    cardType="twitters"
    title={elem.title}
    content={elem.content}
    twitterName={elem.twitterName}
    created={elem.cretaed}
    key = {elem.id}
  />
))}
  </GridTemplate>
);

const mapStateToProps = ({twitters}) => ({twitters})




export default connect(mapStateToProps)(Twitters);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};
