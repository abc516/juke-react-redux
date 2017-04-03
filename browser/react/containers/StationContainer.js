import React from 'react';
import Station from '../components/Station';
import {connect} from 'react-redux';
import {toggleSong} from '../action-creators/player'
import {convertSong} from '../utils'

function getGenreSongs(songsArr, genreName) {
  const genreSongs = [];
  songsArr.forEach((song) => song.genre === genreName ? genreSongs.push(song) : undefined);
  return genreSongs.map(convertSong);
}

function mapStateToProps(state, ownProps) {
  //console.log(state);
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
    toggleOne: function(song, list){
      dispatch(toggleSong(song, list))
    }
  };
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);

export default StationContainer;
