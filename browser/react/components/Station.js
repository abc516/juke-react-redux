import React from 'react';
import {Link} from 'react-router';
import Songs from './Songs';

export default function Station (props) {
  const genre = props.genre;
  return (
    <div>
    <h3> {genre} Station</h3>
    <Songs songs={props.songs}
      currentSong={props.currentSong}
      isPlaying={props.isPlaying}
      toggle={props.toggleOne} />
    </div>
  )
}
