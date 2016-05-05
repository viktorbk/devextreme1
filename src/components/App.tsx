import * as React from "react";
import * as ReactDOM from "react-dom";

import {Menu} from './Menu';
import {TabList} from './TabList';

import {State} from "../redux/model";

interface AppProps { state: State }

export class App extends React.Component<AppProps, {}> {

  newProject() {
    alert('new project created!');
  }

  render() {
      return (
        <div>
          <Menu items={ this.props.state.mainMenuItems } newPrj={this.newProject} />
          <TabList projects={ this.props.state.projects}/>
        </div>
      )
  }
}
