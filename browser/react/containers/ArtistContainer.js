import React, {Component} from 'react';
import store from '../store';
import Artist from '../components/Artist';
import {connect} from 'react-redux'
import {toggleSong} from '../action-creators/player';

function mapStateToProps(state, ownProps) {
  
  return Object.assign({}, state.player, {
    selectedArtist: state.artists.selected,
    children: ownProps.children
  })
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: function (song, list) {
      dispatch(toggleSong(song, list))
    }
  }
}

const ArtistContainer = connect(mapStateToProps, mapDispatchToProps)(Artist)

export default ArtistContainer;
