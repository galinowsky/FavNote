import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Notes = ({ notes }) => (
  <GridTemplate>
    {notes && notes.map(elem => (
      <Card
        cardType="notes"
        title={elem.title}
        content={elem.content}
        created={elem.cretaed}
        key={elem.id}
        id={elem.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);

// Notes.propTypes = {
//   notes: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       cardType: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       content: PropTypes.string.isRequired,
//       key: PropTypes.number,
//       created: PropTypes.string.isRequired,
//     }),
//   ),
// };
