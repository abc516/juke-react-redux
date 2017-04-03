import React from 'react';
import {connect} from 'react-redux';
import PlayerContainer from './PlayerContainer';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';

function mapStateToProps(state, ownProps) {
  // console.log('Is PROGRESS', state.player);
  return Object.assign({}, state.player)
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: function(song, list) {
       dispatch(toggleSong(song, list))
    },
    next: function() {
      dispatch(next())
    },
    prev: function() {
      dispatch(previous())
    },
    setProgress: function(ratio) {
      dispatch(setProgress(ratio));
    }
  }
}

const PlayerWrapper = connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);

export default PlayerWrapper;
