import * as React from "react";
import * as ReactDOM from "react-dom";
import { Project } from "../redux/model";

export interface TabListProps { projects: Project[] }

export class TabList extends React.Component<TabListProps, {}> {

  componentDidMount() {
    var tab_div = $(ReactDOM.findDOMNode(this));
    tab_div.tabs();
  }
  
  render() {
      return (
        <div id="tabs">
          <ul>
          {
            this.props.projects.map( (prj) => {
              return <li key={prj.id}><a href={"#tabs-" + prj.id}>{prj.name}</a></li>;
            })
          }
          </ul>
          {
            this.props.projects.map( (prj) => {
              return <div key={prj.id} id={"tabs-" + prj.id}><p>TabContent of tab nr {prj.id}</p></div>
            })
          }
        </div>
      )
  }
}
