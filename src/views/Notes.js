import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { fetchItems } from 'actions';

class Notes extends Component {

  componentDidMount() {
    const {fetchItems} = this.props
    fetchItems('notes');
  }

  render() {
    const { notes, fetchItems } = this.props;
    return (
      <GridTemplate>
        {notes &&
          notes.map(elem => (
            <Card
              cardType={elem.type}
              title={elem.title}
              content={elem.content}
              key={elem._id}
              id={elem._id}
            />
          ))}
      </GridTemplate>
    );
  }
}

const mapStateToProps = ({ notes }) => ({ notes });
const mapDispatch = {
  fetchItems,
};

export default connect(mapStateToProps, mapDispatch)(Notes);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      key: PropTypes.number,
      fetchItems: PropTypes.func.isRequired,
      // created: PropTypes.string.isRequired,
    }),
  ),
};
