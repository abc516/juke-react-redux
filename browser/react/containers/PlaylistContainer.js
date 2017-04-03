import React, {Component} from 'react';
import store from '../store';
import {connect} from 'react-redux';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

function mapStateToProps(state, ownProps) {
  return Object.assign({}, state.player, {
    selectedPlaylist: state.playlists.selected
  });
}

function mapDispatchToProps(dispatch) {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  }
}

const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(Playlist);

export default PlaylistContainer;
