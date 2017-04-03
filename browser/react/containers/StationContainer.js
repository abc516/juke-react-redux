import React from 'react';
import Station from '../components/Station';
import {connect} from 'react-redux';

function getGenreSongs(songsArr, genreName) {
  const genreSongs = [];
  songsArr.forEach((song) => song.genre === genreName ? genreSongs.push(song) : undefined);
  return genreSongs;
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  let genreName = ownProps.params.genreName;
  return {
    genre: genreName,
    songs: getGenreSongs(state.songs, genreName),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // toggle: () => 
  };
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);

export default StationContainer;
