import React from 'react'
import {Link} from 'react-router'

export default function Stations(props) {
  const DUMMY_STATIONS_DATA = [
  { name: '90s Hip Hop' },
  { name: 'Death Metal' },
  { name: 'Classical' }
];
  console.log('props', props)
  return (
    <div>
        <h3>Stations</h3>
        <div className="list-group">
        {
          Object.keys(props.stations).map(genre => {
            return (
              <div className="list-group-item" key={genre}>
                <Link to={'fill/me/in/later'}>{genre}</Link>
              </div>
            );
          })
        }
        </div>
      </div>
  )
}
