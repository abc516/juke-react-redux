import React, {Component} from 'react';
import store from '../store';
import Albums from '../components/Albums';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps){
  return {
    albums: state.albums.list
  }
}

function mapDispatchToProps(dispatch){
  return {}
}

const AlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums)

export default AlbumsContainer;
