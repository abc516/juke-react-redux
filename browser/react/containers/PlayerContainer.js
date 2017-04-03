import React, {Component} from 'react';
import AUDIO from '../audio';
import store from '../store';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';

class PlayerContainer extends Component {

  constructor(props) {
    super(props);
    console.log('my super props', props)
  }

  componentDidMount() {

    AUDIO.addEventListener('ended', this.props.next);
    AUDIO.addEventListener('timeupdate', () => {
      this.props.setProgress(AUDIO.currentTime / AUDIO.duration);
    });

    // this.unsubscribe = store.subscribe(() => {
    //   this.setState(store.getState().player);
    // });
  }

  componentWillUnmount() {
    // this.unsubscribe();
  }

  next() {
    // store.dispatch(next());
  }

  prev() {
    // store.dispatch(previous());
  }

  toggle() {
    // store.dispatch(
    //   toggleSong(this.state.currentSong, this.state.currentSongList)
    // );
  }

// FIX PROGRESS BAR PLAY STOP NEXT BACK IN PLAYER WRAPPER
  render() {
    console.log('progress here', this.props)
    return <Player
      player={this.props}
      next={this.props.next}
      prev={this.props.prev}
      toggle={this.props.toggle}
      currentSong={this.props.currentSong}
      progress={this.props.progress}
    />;
  }

}

export default PlayerContainer;
