import React, {Component} from 'react';

import SidebarContainer from '../containers/SidebarContainer';
import PlayerWrapper from '../containers/PlayerWrapper';

export default function App ({ children }) {
  return (
    <div id="main" className="container-fluid">
      <div className="col-xs-2">
        <SidebarContainer />
      </div>
      <div className="col-xs-10">
        { children }
      </div>
      <PlayerWrapper />
    </div>
  );
}
