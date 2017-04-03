import React, {Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';
import {connect} from 'react-redux'

function mapStateToProps(state, ownProps) {
  return {
    playlists: state.playlists.list
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer;
