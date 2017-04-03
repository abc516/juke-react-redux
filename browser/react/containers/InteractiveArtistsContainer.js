import React from 'react';
import {connect} from 'react-redux';
import FilterableArtistsContainer from './FilterableArtistsContainer';

function mapStateToProps(state, ownProps) {
  return {
    artists: state.artists
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const InteractiveArtistsContainer = connect(mapStateToProps, mapDispatchToProps)(FilterableArtistsContainer);

export default InteractiveArtistsContainer;
